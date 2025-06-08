import React from 'react'

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 85, icon: "⚡" },
        { name: "Python", level: 92, icon: "🐍" },
        { name: "HTML", level: 95, icon: "🌐" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "React", level: 80, icon: "⚛️" },
      ]
    },
    {
      category: "Libraries & Frameworks",
      icon: "📚",
      skills: [
        { name: "Django", level: 85, icon: "🎯" },
        { name: "Flask", level: 75, icon: "🍶" },
        { name: "Pandas", level: 88, icon: "🐼" },
        { name: "NumPy", level: 85, icon: "🔢" },
      ]
    },
    {
      category: "Tools & Databases",
      icon: "🔧",
      skills: [
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Git", level: 90, icon: "📂" },
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "PostgreSQL", level: 78, icon: "🐘" },
      ]
    },
    {
      category: "Platforms & Soft Skills",
      icon: "🖥️",
      skills: [
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Windows", level: 95, icon: "🪟" },
        { name: "Leadership", level: 88, icon: "👑" },
        { name: "Public Speaking", level: 82, icon: "🎤" },
      ]
    }
  ];

  return (
    <section id="skills" className='px-4 lg:px-20 py-16 lg:py-24 relative'>
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-[#e99b63] opacity-5 blur-[100px] rounded-full -z-10"></div>
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          data-aos="fade-up"
          data-aos-duration="1000"
          className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-4'
        >
          MY <span className='text-[#e99b63]'>SKILLS</span>
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
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        {skillsData.map((category, categoryIndex) => (
          <div 
            key={category.category}
            data-aos="fade-up"
            data-aos-delay={categoryIndex * 200}
            data-aos-duration="1000"
            className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 lg:p-8 hover:border-[#e99b63]/30 transition-all duration-300 group'
          >
            {/* Category Header */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-[#e99b63] to-[#656565] rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300'>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className='text-xl lg:text-2xl font-semibold tracking-wider text-[#e99b63]'>
                {category.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className='space-y-4'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className='group/skill'>
                  {/* Skill Header */}
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-3'>
                      <span className="text-[#e99b63] text-lg">{skill.icon}</span>
                      <span className='text-white font-medium tracking-wide'>{skill.name}</span>
                    </div>
                    <span className='text-gray-400 text-sm font-medium'>{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className='w-full bg-[#2a2a2a] rounded-full h-2 overflow-hidden'>
                    <div 
                      className='h-full bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full transition-all duration-1000 ease-out'
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        className='mt-16 text-center'
      >
      </div>
    </section>
  )
}

export default Skills