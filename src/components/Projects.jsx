import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "AI-Based Student Paper Evaluation System",
      description: "Developing a system to evaluate handwritten subjective answer sheets using Google Vision API for OCR. The system uses NLP techniques for similarity scoring and context-aware corrections to enhance evaluation accuracy.",
      technologies: ["Django", "HTML/CSS", "OCR", "NLP", "Google Vision API", "Python"],
      githubLink: "https://github.com/Niyati1206/AI_based_Paper_Evaluation.git",
      liveLink: "https://docs.google.com/document/d/1tA9PxDcHQA6DAJUBkz1os2fEk33DQelZvElO04J63sI/edit?usp=sharing",
      image: "src/assets/img/PaperEvaluation.png",
      featured: true
    },
    {
      id: 2,
      title: "Intelligent-Phishing-Detection",
      description: "Developed a machine learning-based browser extension using JavaScript for real-time phishing detection. Achieved 91.9% training accuracy and 92% test accuracy, with iterative improvements based on user feedback.",
      technologies: ["Javascript", "XGBoost", "Machine Learning"],
      githubLink: "https://github.com/Niyati1206/Intelligent-Phishing-Detection.git",
      liveLink: "https://drive.google.com/file/d/1RF5EnPTaL0zeEULlTBzbCY3h2eqUh38I/view?usp=sharing",
      image: "src/assets/img/Intelligentusethis.jfif",
      featured: true
    },
    {
      id: 3,
      title: "Evidence Management System",
      description: "A decentralized application (dApp) that enables secure and immutable management of digital evidence using Ethereum smart contracts and IPFS. Role-based access control ensures only authorized parties like police officers and court officials can interact with the system, protecting the integrity of uploaded evidence.",
      technologies: ["Truffle", "Ganache", "IPFS via Pinata", "Ethereum", "MetaMask", "HTML/CSS", "JavaScript"],
      githubLink: "https://github.com/Niyati1206/EvidenceManagementSystem",
      liveLink: null,
      image: "src/assets/img/EvidenceManagement.png",
      featured: false
    },
    {
      id: 4,
      title: "Healthometer",
      description: "Designed an IoT-based system to monitor infants' health using sensors for pulse, temperature, and cough detection. Integrated a machine learning model to detect respiratory diseases with 92.7% accuracy.",
      technologies: ["IOT", "Arduino", "Machine Learning", "Streamlit", "Kotlin"],
      githubLink: "https://github.com/subh1416/Respiratory-Diseases",
      liveLink: null,
      image: "src/assets/img/Healthometer.png",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and enhanced with 3D elements and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Spline", "AOS", "Vercel"],
      githubLink: "https://github.com/Niyati1206/Portfolio",
      liveLink: "https://niyati-portfolio.com",
      image: "src/assets/img/Portfolio.png",
      featured: false
    },
    {
      id: 6,
      title: "KITE- Online nursery",
      description: "Created an e-commerce website offering a variety of plants, fertilizers, pots, and seeds for online purchase. The site also provided detailed information about various medicinal plants to educate users.",
      technologies: ["HTML","CSS","Javascript","MySQL"],
      githubLink: "https://github.com/subh1416/KITE-Online-Nursery",
      liveLink: null,
      image: "src/assets/img/KITE.png",
      featured: false
    },
    {
      id: 7,
      title: "Trip Guide",
      description: "This is my first Flutter project. Created static pages for a Trip Guide App as a part of an internship task.",
      technologies: ["Flutter","Application Development"],
      githubLink: "https://github.com/Niyati1206/TripGuide",
      liveLink: null,
      image: "src/assets/img/TripGuide.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Hogwarts School Admission Portal",
      description: "As part of my internship, I developed a fictional school admission portal inspired by Hogwarts using HTML, CSS, and PHP. The project involved creating a user-friendly interface for student registrations, form validations, and backend data handling using PHP.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      githubLink: "https://github.com/Niyati1206/hogwarts_website",
      liveLink: null,
      image: "/assets/img/project8.jpg",
      featured: false
    }
  ];

  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section id="projects" className='px-4 lg:px-20 py-16 lg:py-24 relative'>
      {/* Background Effects */}
      <div className="absolute left-0 top-1/4 w-[30rem] h-[20rem] bg-[#e99b63] opacity-3 blur-[120px] rounded-full -z-10"></div>
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          data-aos="fade-up"
          data-aos-duration="1000"
          className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-4'
        >
          MY <span className='text-[#e99b63]'>PROJECTS</span>
        </h2>
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className='w-24 h-1 bg-gradient-to-r from-[#656565] to-[#e99b63] mx-auto mb-6'
        ></div>
        <p 
          data-aos="fade-up"
          data-aos-delay="400"
          className='text-gray-400 text-lg max-w-2xl mx-auto'
        >
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h3 
          data-aos="fade-up"
          data-aos-delay="200"
          className='text-2xl font-semibold tracking-wider mb-8 text-[#e99b63] text-center'
        >
          Featured Projects
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 200)}
              data-aos-duration="1000"
              className='group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#e99b63]/50 transition-all duration-300 hover:transform hover:scale-[1.02]'
            >
              {/* Project Image */}
              <div className='relative overflow-hidden h-48'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className='w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center text-4xl text-[#e99b63] hidden'>
                  <i className='bx bx-code-alt'></i>
                </div>
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h4 className='text-xl font-semibold tracking-wider mb-3 text-white group-hover:text-[#e99b63] transition-colors duration-300'>
                  {project.title}
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 bg-[#2a2a2a] text-[#e99b63] text-xs rounded-full border border-[#3a3a3a] hover:border-[#e99b63]/50 transition-colors duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className='flex gap-4'>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] rounded-full text-sm hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300'
                  >
                    <i className='bx bxl-github text-lg'></i>
                    Code
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full text-sm text-white hover:from-[#e99b63] hover:to-[#656565] transition-all duration-300'
                    >
                      <i className='bx bx-link-external text-lg'></i>
                      Project Report
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 
          data-aos="fade-up"
          data-aos-delay="200"
          className='text-2xl font-semibold tracking-wider mb-8 text-[#e99b63] text-center'
        >
          Other Projects
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {otherProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
              data-aos-duration="800"
              className='group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-xl hover:border-[#e99b63]/50 transition-all duration-300 hover:transform hover:translateY-[-4px] overflow-hidden'
            >
              {/* Project Image for Other Projects */}
              <div className='relative overflow-hidden h-40'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className='w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center text-3xl text-[#e99b63] hidden'>
                  <i className='bx bx-code-alt'></i>
                </div>
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-gradient-to-br from-[#e99b63] to-[#656565] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300'>
                    <i className='bx bx-code-alt'></i>
                  </div>
                  <h4 className='text-lg font-semibold tracking-wider text-white group-hover:text-[#e99b63] transition-colors duration-300'>
                    {project.title}
                  </h4>
                </div>

                <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-2 py-1 bg-[#2a2a2a] text-[#e99b63] text-xs rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2 py-1 bg-[#2a2a2a] text-gray-400 text-xs rounded-full'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className='flex gap-3'>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-1 text-gray-400 hover:text-[#e99b63] transition-colors duration-300'
                  >
                    <i className='bx bxl-github text-lg'></i>
                    <span className='text-xs'>Code</span>
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-1 text-gray-400 hover:text-[#e99b63] transition-colors duration-300'
                    >
                      <i className='bx bx-link-external text-lg'></i>
                      <span className='text-xs'>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div 
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
        className='text-center mt-16'
      >
        <div className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 max-w-2xl mx-auto'>
          <h3 className='text-2xl font-semibold tracking-wider mb-4 text-[#e99b63]'>
            Want to see more?
          </h3>
          <p className='text-gray-400 mb-6'>
            Check out my GitHub for more projects and contributions to open source
          </p>
          <a 
            href="https://github.com/Niyati1206" 
            target="_blank" 
            rel="noopener noreferrer"
            className='inline-flex items-center gap-2 border border-[#2a2a2a] py-3 px-8 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#e99b63]'
          >
            <i className='bx bxl-github text-xl'></i>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects