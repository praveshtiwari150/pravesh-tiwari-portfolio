import React from 'react';
import pravesh from '../assets/pravesh.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const About = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_LINK;
  const [typeEffect] = useTypewriter({
    words: ['Full Stack Web Developer', 'Frontend Developer', 'Backend Developer'],
    loop: {},
    typeSpeed: 500,
    deleteSpeed: 100
  })
  return (
    <div id='about' className=' flex flex-col md:flex-row items-center justify-center py-24 gap-6 md:gap-12  h-auto md:h-[480px] w-full'>
      
      {/* Image - Order first on small devices */}
      <img 
        src={pravesh}
        alt="Pravesh Tiwari"
        className='w-40 h-40 md:w-58 md:h-58 rounded-full object-cover shadow-md border-1 md:order-2'
      />

      {/* Text Content - Order second on small devices */}
      <div className='text-secondary text-center md:text-left max-w-xl order-2 md:order-1'>
        <div className='sm:w-sm text-xl font-bold mb-2'>
          Hi, I'm <span className='text-tertiary text-2xl font-mono'>Pravesh Tiwari</span> — a  <span className='text-tertiary text-2xl'>{typeEffect}</span><span className='text-4xl font-bold'><Cursor cursorStyle='|' /></span>
        </div>
        <p className='sm:w-sm text-secondary text-justify'>
          Passionate about building scalable web applications and real-time systems. I specialize in modern technologies like React, Next.js, Node.js, and WebRTC to bring innovative ideas to life. Whether it’s crafting smooth user experiences or designing robust backend systems, I’m always driven to create impactful digital solutions.
        </p>
        <a href={resumeUrl} target='_blank' className='inline-block bg-tertiary text-white cursor-pointer mt-4 px-6 py-2 rounded-lg font-semibold hover:bg-tertiary-dark transition duration-300 ease-in-out transform hover:scale-105'>View My Resume</a>
      </div>
    </div>
  );
};

export default About;