import React, { useEffect, useRef } from 'react';
import './Body1.css';

export default function Body1() {
  const skillsRef = useRef(null); // Ref for the skills section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add the animation class
            observer.unobserve(entry.target); // Stop observing after animation is applied
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current); // Start observing the skills section
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current); // Cleanup observer
      }
    };
  }, []);

  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'Bootstrap', level: 95 },
    { name: 'React JS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Node JS', level: 80 },
    { name: 'Express JS', level: 90 },
    { name: 'MongoDB', level: 80 },
    { name: 'Solidity', level: 80 },


  ];

  return (
    <div className="body">
      <div className="content">
        <div className="space"></div>
        <h1 className="heading">About Me</h1>
        <p className="intro">
          I am a MERN Stack Developer who builds modern and scalable web apps.  
          I specialize in React for UI, Node.js for the backend, and MongoDB for databases.  
          My focus is on performance, responsiveness, and seamless user experience.
        </p>
        <div className="break"></div>
        
        {/* Skills List with Progress Bars */}
        <div className="skills-list" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ '--progress-width': `${skill.level}%` }} 
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}