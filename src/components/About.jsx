import React from 'react'
import 'boxicons/css/boxicons.min.css';
import MeImage from '../assets/img/Me.jpg';

const About = () => {
  return (
    <section id="about" className='px-4 lg:px-20 py-16 lg:py-24'>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          data-aos="fade-up"
          data-aos-duration="1000"
          className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-4'
        >
          ABOUT <span className='text-[#e99b63]'>ME</span>
        </h2>
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className='w-24 h-1 bg-gradient-to-r from-[#656565] to-[#e99b63] mx-auto'
        ></div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
        {/* Image Section */}
        <div 
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-offset="200"
          className='lg:w-1/2 flex justify-center'
        >
          <div className='relative'>
            {/* Glow effect behind image */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#e99b63] to-[#656565] rounded-2xl blur-2xl opacity-20 scale-110'></div>
            
            {/* Image container */}
            <div className='relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-[#2a2a2a]'>
              {/* Placeholder for your image - replace src with your actual image */}
              <img 
                src={MeImage}
                alt="Niyati Sawant" 
                className='w-full h-full object-cover'
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className='w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center text-6xl text-[#e99b63]'>
                <i className='bx bx-user'></i>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-offset="200"
          className='lg:w-1/2 space-y-6'
        >
          <div className='space-y-4'>
            <h3 className='text-2xl lg:text-3xl font-semibold text-[#e99b63] tracking-wider'>
              Hello There!
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed tracking-wide'>
            I'm a passionate developer who loves bringing ideas to life through code. With a solid foundation in both frontend and backend technologies, I enjoy solving challenging problems and constantly exploring new tools and frameworks.
            </p>
            <p className='text-gray-400 text-lg leading-relaxed tracking-wide'>
            When I’m not coding, you’ll likely find me playing chess, writing poetry, or diving deep into something new I’m studying—be it a tech concept or a random curiosity. I believe in writing clean, efficient code and crafting user experiences that genuinely make a difference.
            </p>
          </div>

          {/* Stats or highlights */}
          <div className='grid grid-cols-2 gap-6 mt-8'>
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className='text-center p-4 rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]'
            >
              <h4 className='text-2xl font-bold text-[#e99b63]'>Problem Solver</h4>
              <p className='text-gray-400 text-sm tracking-wider'>200+ DSA problems solved</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className='text-center p-4 rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]'
            >
              <h4 className='text-2xl font-bold text-[#e99b63]'>Learning Every Day</h4>
              <p className='text-gray-400 text-sm tracking-wider'>Always exploring new tech</p>
            </div>
          </div>

          {/* CTA Button */}
          <div 
            data-aos="fade-up"
            data-aos-delay="800"
            className='pt-6'
          >
            <a 
              href="#contact" 
              className='inline-flex items-center gap-2 border border-[#2a2a2a] py-3 px-8 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#e99b63]'
            >
              Let's Work Together
              <i className='bx bx-right-arrow-alt text-xl'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About