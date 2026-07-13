import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import SplashCursor from './components/SplashCursor'
import HeroSection from './components/HeroSection'
import Beams from './components/Beams'
import Education from './components/Education'
import Certificates from './components/Certificates'
import AboutSection from './components/AboutSection'
import Experiences from './components/Experiences'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111827]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#06B6D4"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <SplashCursor
        DENSITY_DISSIPATION={7.5}
        VELOCITY_DISSIPATION={23}
        PRESSURE={0.1}
        CURL={19}
        SPLAT_RADIUS={0.11}
        SPLAT_FORCE={6500}
        COLOR_UPDATE_SPEED={9}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#06a2c2"
      />

      <div className="relative z-10">
        <Header />

        <div className="mb-1">
          <HeroSection />
        </div>
        <div className='mb-30'>
        <Education />
        </div>
        <div className='mb-30'>
        <Certificates />
        </div>
        <div className='mb-30'>
        <AboutSection />
        </div>
        <Experiences />
        <div className='mb-30'>
        <Contacts />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App