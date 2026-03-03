/**
 * OptimizedImage Component
 *
 * Drop-in <img> replacement for Cloudinary-hosted images.
 * ✅ f_auto — auto WebP/AVIF
 * ✅ q_auto — auto quality
 * ✅ Responsive srcSet
 * ✅ Lazy loading (native)
 * ✅ Aspect ratio to prevent layout shift
 *
 * NO backend. NO API keys. Just CDN URL transforms.
 */

import React, { useState } from 'react';
import {
    cloudinaryUrl,
    cloudinarySrcSet,
    responsiveSizes,
} from '../utils/cloudinaryUtils.js';

const OptimizedImage = ({
    // Cloudinary image path (e.g. "vra/hero.jpg")
    imagePath,
    // OR a full src URL (for non-Cloudinary / local images)
    src,
    alt = '',
    width,
    height,
    aspectRatio,
    layout = 'card',
    className = '',
    style = {},
    loading = 'lazy',
    priority = false,
    ...rest
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Build the image source
    const imgSrc = imagePath
        ? cloudinaryUrl(imagePath, { width: width || (layout === 'full' ? 1200 : 800) })
        : src;

    // Build srcSet only for Cloudinary images
    const srcSet = imagePath
        ? cloudinarySrcSet(imagePath)
        : undefined;

    const sizes = srcSet ? responsiveSizes(layout) : undefined;

    // Prevent layout shift
    const ratioStyle = aspectRatio
        ? { aspectRatio }
        : width && height
            ? { aspectRatio: `${width} / ${height}` }
            : {};

    return (
        <img
            src={imgSrc}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            fetchpriority={priority ? 'high' : undefined}
            decoding={priority ? 'sync' : 'async'}
            onLoad={() => setIsLoaded(true)}
            className={className}
            style={{
                objectFit: 'cover',
                ...ratioStyle,
                ...style,
            }}
            {...rest}
        />
    );
};

export default OptimizedImage;
