import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import Spline from '@splinetool/react-spline'; // Import Spline for 3D models
const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
      <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
            <i class='bx bx-diamond'></i>
            INTRODUCING
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          NIYATI SAWANT
          <br />
        </h1>
        {/* Dynamic Typing Text Here */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-semibold tracking-wider my-7 text-[#e99b63]'>
          <Typewriter
            words={['Python Developer', 'Software Developer', 'AI Enthusiast', 'Linux!']}
            loop={0} // 0 = infinite
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:max-w-[30rem] text-gray-400 max-w-[25rem] tracking-wider'>
          A passionate developer with a knack for creating innovative solutions.
          <br />
          Let's build something amazing together        </p>
        {/* Buttons for resume link and mail me */}
        <div className='flex gap-4 mt-12'>
          <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="https://drive.google.com/file/d/1eqqkoeg--uRNBEVSfC2SpOWak104PzEY/view?usp=sharing">Resume <i class='bx bx-link-external'></i></a>

          <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#contact">Let's Connect <i class='bx bx-link-external'></i></a>
        </div>
      </div>
      {/* 3D Robot */}
       <Spline data-aos="fade-zoom-in" 
    data-aos-offset ="0"
    data-aos-delay="300"
    data-aos-easing="ease-in-back" data-aos-duration="2700" className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/4XekeH9kmqYwJDLd/scene.splinecode" /> 
          </main>
  )
}

export default Hero
