import { useState, useEffect } from 'react'
import Disclaimer from './components/Disclaimer'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Profiles from './components/Profiles'
import Why from './components/Why'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('escortvideoxx-roma-disclaimer')
    if (accepted) {
      setDisclaimerAccepted(true)
    }
  }, [])

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('escortvideoxx-roma-disclaimer', 'true')
    setDisclaimerAccepted(true)
  }

  if (!disclaimerAccepted) {
    return <Disclaimer onAccept={handleAcceptDisclaimer} />
  }

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <Hero />
      <Categories />
      <Profiles />
      <Why />
      <CTA />
      <Footer />
    </div>
  )
}
