import React from 'react';
import pravesh from '../assets/pravesh.png';

const About = () => {
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
        <div className='sm:w-sm text-xl text-justify font-bold mb-2'>
          Hi, I'm <span className='text-tertiary text-3xl font-mono'>Pravesh Tiwari</span> — a <span className='text-tertiary text-3xl'>Full Stack Web Developer</span>.
        </div>
        <p className='sm:w-sm text-secondary text-justify'>
          Passionate about building scalable web applications and real-time systems. I specialize in modern technologies like React, Next.js, Node.js, and WebRTC to bring innovative ideas to life. Whether it’s crafting smooth user experiences or designing robust backend systems, I’m always driven to create impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default About;