import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with your actual form handling logic
    try {
      // Here you would typically send the form data to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000); // Clear status after 5 seconds
    }
  };

  const contactInfo = [
    {
      icon: 'bx-envelope',
      title: 'Email',
      value: 'niyatisawant2017@gmail.com',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=new'
    },
    {
      icon: 'bx-phone',
      title: 'Phone',
      value: '+91 998790 8145',
      link: 'tel:+919987908145'
    },
    {
      icon: 'bx-map',
      title: 'Location',
      value: 'Navi Mumbai, Maharashtra, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className='px-4 lg:px-20 py-16 lg:py-24 relative'>
      {/* Background Effects */}
      <div className="absolute right-0 top-1/3 w-[40rem] h-[25rem] bg-[#e99b63] opacity-4 blur-[120px] rounded-full -z-10"></div>
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          data-aos="fade-up"
          data-aos-duration="1000"
          className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-4'
        >
          GET IN <span className='text-[#e99b63]'>TOUCH</span>
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
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together!
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
        {/* Contact Information */}
        <div 
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          className='space-y-8'
        >
          <div>
            <h3 className='text-2xl font-semibold tracking-wider mb-6 text-[#e99b63]'>
              Let's Connect
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed mb-8'>
              I'm always open to discussing new opportunities, creative projects, 
              or just having a friendly conversation about technology and development.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className='space-y-4'>
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 200)}
                data-aos-duration="800"
                className='group'
              >
                <a 
                  href={info.link}
                  className='flex items-center gap-4 p-4 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-xl hover:border-[#e99b63]/50 transition-all duration-300 hover:transform hover:translateX-2'
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-[#e99b63] to-[#656565] rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300'>
                    <i className={`bx ${info.icon}`}></i>
                  </div>
                  <div>
                    <h4 className='text-white font-semibold tracking-wide group-hover:text-[#e99b63] transition-colors duration-300'>
                      {info.title}
                    </h4>
                    <p className='text-gray-400 text-sm'>{info.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div 
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="800"
            className='pt-6'
          >
            <h4 className='text-lg font-semibold tracking-wider mb-4 text-[#e99b63]'>
              Follow Me
            </h4>
            <div className='flex gap-4'>
              {[
                { icon: 'bxl-github', link: 'https://github.com/Niyati1206' },
                { icon: 'bxl-linkedin', link: 'https://www.linkedin.com/in/niyati-sawant-012a22242/' },
                { icon: 'bxl-twitter', link: 'https://twitter.com/niyati_sawant' }
              ].map((social, index) => (
                <a 
                  key={social.icon}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#e99b63] hover:border-[#e99b63]/50 hover:scale-110 transition-all duration-300'
                >
                  <i className={`bx ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 lg:p-8'
        >
          <h3 className='text-2xl font-semibold tracking-wider mb-6 text-[#e99b63]'>
            Send Message
          </h3>
          
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name and Email Row */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#e99b63] focus:outline-none transition-colors duration-300'
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#e99b63] focus:outline-none transition-colors duration-300'
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className='block text-sm font-medium text-gray-300 mb-2'>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#e99b63] focus:outline-none transition-colors duration-300'
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-2'>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className='w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-[#e99b63] focus:outline-none transition-colors duration-300 resize-none'
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus === 'success' 
                  ? 'bg-green-900/30 border border-green-500/50 text-green-400' 
                  : 'bg-red-900/30 border border-red-500/50 text-red-400'
              }`}>
                <div className='flex items-center gap-2'>
                  <i className={`bx ${submitStatus === 'success' ? 'bx-check-circle' : 'bx-error-circle'}`}></i>
                  <span>
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : 'Failed to send message. Please try again or email me directly.'}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className='w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-6 rounded-lg font-semibold tracking-wider hover:from-[#e99b63] hover:to-[#656565] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {isSubmitting ? (
                <>
                  <i className='bx bx-loader-alt animate-spin'></i>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <i className='bx bx-send'></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div 
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
        className='mt-16 text-center'
      >
      </div>
    </section>
  )
}

export default Contact