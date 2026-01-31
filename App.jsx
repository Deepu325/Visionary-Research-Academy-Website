import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import WhoWeHelpUG from './WhoWeHelpUG'
import WhoWeHelpPG from './WhoWeHelpPG'
import WhoWeHelpPhD from './WhoWeHelpPhD'
import Services from './Services'
import WhyTrustUs from './WhyTrustUs'
import PricingPhilosophy from './PricingPhilosophy'
import SuccessStories from './SuccessStories'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-help/ug" element={<WhoWeHelpUG />} />
            <Route path="/who-we-help/pg" element={<WhoWeHelpPG />} />
            <Route path="/who-we-help/phd" element={<WhoWeHelpPhD />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-trust-us" element={<WhyTrustUs />} />
            <Route path="/pricing" element={<PricingPhilosophy />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App