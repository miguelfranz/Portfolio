import React from 'react'
import { Download } from 'lucide-react'

import TiltedCard from './TiltedCard'
import miguel from '../assets/miguel.png'
import resume from '../assets/francisco.pdf'
import TextType from '../components/TextType';
import StarBorder from '../components/StarBorder'
const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center"
      data-aos="zoom-in-up"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 -mt-16">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>
            <h1>

              <TextType
                className="text-s lg:text-4xl font-semibold text-primary leading-tight"
                text={["Hi! I'm Miggy!", "Welcome to my Portfolio!"]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                texts={["Hi! I'm Miggy!", "Welcome to my Portfolio!"]}
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
            </h1>

            <p className="text-gray-300 mt-8 max-w-xl leading-8">
              I'm a Front-End Developer and UI/UX Designer with a passion for
              creating modern, responsive, and user-friendly digital
              experiences. I enjoy transforming ideas into clean, functional
              interfaces that not only look great but also provide an intuitive
              user experience.
            </p>

            <div className="mt-10">
              <a href={resume} download>
                <StarBorder
                  as="button"
                  className="inline-flex items-center gap-2"
                  color="white"
                  speed="5s"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </StarBorder>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex justify-center">
            <TiltedCard
              imageSrc={miguel}
              altText="Miggy"
              captionText="Frontend Developer, UI/UX Designer"
              containerHeight="420px"
              containerWidth="350px"
              imageHeight="420px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.25}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 shadow-xl text-white">
                  Hire Me!
                </p>
              }
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection