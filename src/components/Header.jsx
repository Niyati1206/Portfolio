import React from 'react';
import 'boxicons/css/boxicons.min.css';
const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Hide mobile menu after clicking
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className='text-3xl md:text-4xl lg:text-5xl font-light m-0'
      >
        NIYATI
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        <button data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1000"  onClick={() => handleLinkClick('about')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          ABOUT
        </button>
        <button data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1500" onClick={() => handleLinkClick('skills')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          SKILLS
        </button>
  <button data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1800" onClick={() => handleLinkClick('experience')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          EXPERIENCE
        </button>
        <button data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="2000" onClick={() => handleLinkClick('projects')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          PROJECTS
        </button>
        <button data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="2500"  onClick={() => handleLinkClick('contact')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          CONTACT
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile Nav */}
      <div id='mobileMenu' className='fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md hidden'>
        <nav className="flex flex-col items-center gap-6">
          <button onClick={() => handleLinkClick('about')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            ABOUT
          </button>
          <button onClick={() => handleLinkClick('skills')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            SKILLS
          </button>
          <button onClick={() => handleLinkClick('experience')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            EXPERIENCE
          </button>
          <button onClick={() => handleLinkClick('projects')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            PROJECTS
          </button>
          <button onClick={() => handleLinkClick('contact')} className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
