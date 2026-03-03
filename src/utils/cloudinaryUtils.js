/**
 * Cloudinary URL Utilities (Frontend Only)
 *
 * NO API keys needed. NO backend needed.
 * Just transforms publicly accessible Cloudinary CDN URLs
 * with optimization parameters like f_auto, q_auto, w_XXX.
 *
 * Usage:
 *   1. Upload images manually via Cloudinary Dashboard
 *   2. Copy the base URL
 *   3. Use these helpers to build optimized URLs
 */

// Your Cloudinary cloud name — this is PUBLIC, not a secret
export const CLOUD_NAME = 'YOUR_CLOUD_NAME'; // ← Replace with your actual cloud name

/**
 * Build a Cloudinary delivery URL with optimizations.
 *
 * @param {string} imagePath - Path after /upload/ (e.g. "vra/hero.jpg")
 * @param {object} options
 * @param {number}  [options.width=800]   - Image width
 * @param {string}  [options.quality='auto'] - Quality (auto, auto:low, auto:best)
 * @param {string}  [options.format='auto']  - Format (auto = WebP/AVIF when supported)
 * @param {string}  [options.crop='limit']   - Crop mode
 * @returns {string} Full optimized Cloudinary URL
 *
 * @example
 * cloudinaryUrl('vra/hero.jpg', { width: 1200 })
 * // → https://res.cloudinary.com/YOUR_NAME/image/upload/f_auto,q_auto,w_1200,c_limit/vra/hero.jpg
 */
export const cloudinaryUrl = (imagePath, options = {}) => {
    const {
        width = 800,
        quality = 'auto',
        format = 'auto',
        crop = 'limit',
    } = options;

    const transforms = `f_${format},q_${quality},w_${width},c_${crop}`;

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${imagePath}`;
};

/**
 * Generate a responsive srcSet from a Cloudinary image path.
 *
 * @param {string} imagePath - Path after /upload/
 * @param {number[]} widths  - Array of widths
 * @returns {string} srcSet attribute value
 */
export const cloudinarySrcSet = (imagePath, widths = [400, 600, 800, 1200]) => {
    return widths
        .map((w) => `${cloudinaryUrl(imagePath, { width: w })} ${w}w`)
        .join(', ');
};

/**
 * Get a sizes attribute for common layouts.
 */
export const responsiveSizes = (layout = 'full') => {
    const map = {
        full: '100vw',
        half: '(max-width: 768px) 100vw, 50vw',
        third: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
        card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px',
        thumbnail: '(max-width: 640px) 50vw, 150px',
    };
    return map[layout] || map.full;
};
