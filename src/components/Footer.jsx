import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'bxl-github',
      url: 'https://github.com/Niyati1206',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: 'bxl-linkedin',
      url: 'https://www.linkedin.com/in/niyati-sawant-012a22242/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: 'bxl-twitter',
      url: 'https://twitter.com/niyati_sawant',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Instagram',
      icon: 'bxl-instagram',
      url: 'https://instagram.com/niyati.sawant1',
      color: 'hover:text-pink-400'
    },
    {
  name: 'LeetCode',
  icon: 'bx-code-alt', // You can choose a different icon if desired
  url: 'https://leetcode.com/niyati1206', // Replace with your actual LeetCode profile
  color: 'hover:text-yellow-400'
    },
    {
      name: 'Email',
      icon: 'bx-envelope',
      url: 'https://mail.google.com/mail/u/0/#inbox',
      color: 'hover:text-red-400'
    }
  ];




  return (
    <footer className='relative bg-gradient-to-b from-[#0a0a0a] to-black border-t border-[#2a2a2a]'>
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60rem] h-[20rem] bg-[#e99b63] opacity-3 blur-[120px] rounded-full -z-10"></div>
      
      <div className='px-4 lg:px-20 py-12 lg:py-16'>
        {/* Social Links Section */}
        <div 
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          className='border-t border-[#2a2a2a] pt-8 mb-8'
        >
          <div className='text-center mb-6'>
            <h3 className='text-xl font-semibold tracking-wider mb-4 text-[#e99b63]'>
              Let's Connect
            </h3>
            <p className='text-gray-400 mb-6'>
              Follow me on social media for updates and tech insights
            </p>
          </div>
          
          {/* Social Icons */}
          <div className='flex justify-center gap-4 mb-8'>
            {socialLinks.map((social, index) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={700 + (index * 100)}
                data-aos-duration="600"
                className={`group w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:border-[#e99b63]/50 hover:scale-110 transition-all duration-300`}
                title={social.name}
              >
                <i className={`bx ${social.icon} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          className='border-t border-[#2a2a2a] pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <div className='text-gray-400 text-sm'>
              <p>
                © {currentYear} Niyati Sawant. All rights reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className='flex gap-6 text-sm'>
              <a 
                href="/privacy" 
                className='text-gray-400 hover:text-[#e99b63] transition-colors duration-300'
              >
                Live <i className='bx bx-heart text-yellow-500 animate-pulse'></i>
              </a>
              <a 
                href="/terms" 
                className='text-gray-400 hover:text-[#e99b63] transition-colors duration-300'
              >
                Love<i className='bx bx-heart text-red-500 animate-pulse'></i>
              </a>
              <a 
                href="/sitemap.xml" 
                className='text-gray-400 hover:text-[#e99b63] transition-colors duration-300'
              >
               Laugh<i className='bx bx-heart text-pink-500 animate-pulse'></i>
              </a>
            </div>

            {/* Back to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='group w-10 h-10 bg-gradient-to-br from-[#656565] to-[#e99b63] rounded-full flex items-center justify-center text-white hover:from-[#e99b63] hover:to-[#656565] hover:scale-110 transition-all duration-300'
              title="Back to top"
            >
              <i className='bx bx-up-arrow-alt text-lg group-hover:translate-y-[-2px] transition-transform duration-300'></i>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer