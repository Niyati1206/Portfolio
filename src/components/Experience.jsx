import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 lg:px-20">
      {/* Section Title */}
      <h2 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 text-[#e99b63] "
      >
        EXPERIENCE
      </h2>

      {/* Experience Card */}
      <div className="max-w-4xl mx-auto">
        <div 
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="bg-black bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-lg p-8 hover:bg-opacity-40 transition-all duration-300"
        >
          {/* Company and Duration */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-wider mb-2 text-[#e99b63]">
                SDE INTERN
              </h3>
              <h4 className="text-lg md:text-xl text-gray-300 font-light tracking-wider mb-4 md:mb-0">
                DIRECTORATE OF FORENSIC SCIENCE LABORATORIES
              </h4>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <i className='bx bx-calendar text-lg'></i>
              <span className="text-base tracking-wider">FEB 2024 - DEC 2024  </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-6 text-gray-400">
            <i className='bx bx-map text-lg'></i>
            <span className="text-base tracking-wider">KALINA, MUMBAI, INDIA</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-base leading-relaxed text-gray-300 mb-4">
             Developed a Django-based web app to streamline store and order management across 7 major and 12 regional labs.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h5 className="text-lg font-light tracking-wider mb-4 text-[#e99b63]">
              KEY ACHIEVEMENTS
            </h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <i className='bx bx-check text-lg text-gray-400 mt-1'></i>
                <span className="text-base text-gray-300">
                  Automated generation of official documents like letters and reports for lab ordering processes.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className='bx bx-check text-lg text-gray-400 mt-1'></i>
                <span className="text-base text-gray-300">
                 Simplified operations for multiple central and regional laboratories through a unified platform.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className='bx bx-check text-lg text-gray-400 mt-1'></i>
                <span className="text-base text-gray-300">
                  Optimized the operations saving a lot of human efforts.
                </span>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h5 className="text-lg font-light tracking-wider mb-4  text-[#e99b63]">
              TECHNOLOGIES
            </h5>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-black bg-opacity-50 border border-gray-600 rounded text-sm tracking-wider hover:border-gray-400 transition-colors">
                DJANGO
              </span>
              <span className="px-3 py-1 bg-black bg-opacity-50 border border-gray-600 rounded text-sm tracking-wider hover:border-gray-400 transition-colors">
                HTML
              </span>
              <span className="px-3 py-1 bg-black bg-opacity-50 border border-gray-600 rounded text-sm tracking-wider hover:border-gray-400 transition-colors">
                JAVASCRIPT
              </span>
              <span className="px-3 py-1 bg-black bg-opacity-50 border border-gray-600 rounded text-sm tracking-wider hover:border-gray-400 transition-colors">
                TAILWIND CSS
              </span>
            <span className="px-3 py-1 bg-black bg-opacity-50 border border-gray-600 rounded text-sm tracking-wider hover:border-gray-400 transition-colors">
                DOCKER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;