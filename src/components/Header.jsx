import React from 'react'
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
const Header = () => {
  const toggleMobileMenu = () =>{
    const mobileMenu = document.getElementById('mobileMenu');
    //If it has hidden class remove it otherwise add it
    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    }else{
      mobileMenu.classList.add('hidden');
    }

  }
  return (
   <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
    <h1 data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1500"
    className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
        NIYATI
    </h1>
 <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">ABOUT</a>
        <a data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">SKILLS</a>
        <a data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="2000"  className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">PROJECTS</a>
        <a  data-aos="fade-down" 
    data-aos-easing ="linear"
    data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">CONTACTS</a>
      </nav>
    {/* Menu trigger for mobile screen */}
    <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
      < i class='bx  bx-menu'  ></i> 
    </button>
    {/* Mobile menu hidden by default */} 
    <div id='mobileMenu'className='fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md '>
      <nav className="flex flex-col items-center gap-6">
         <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">ABOUT</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">SKILLS</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">PROJECTS</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">CONTACTS</a>
      </nav>
    </div>
   </header>
  )
}

export default Header