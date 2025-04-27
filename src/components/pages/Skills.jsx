import React from 'react';
import SkillBar from '../ui/SkillBar';
import SoftSkill from '../ui/SoftSkill';

const Skills = () => {
  const technicalSkills = [
    { id: 1, skill: 'HTML', percentage: 95 },
    { id: 2, skill: 'CSS', percentage: 80 },
    { id: 3, skill: 'JS', percentage: 40 },
    { id: 4, skill: 'PHP', percentage: 30 },
    { id: 5, skill: 'React', percentage: 30 },
    { id: 6, skill: 'Node.JS', percentage: 30 }
  ];

  const softSkills = [
    { id: 1, icon: 'fa-solid fa-brain', text: 'Fast Learner' },
    { id: 2, icon: 'fa-solid fa-comment', text: 'Communication skills' },
    { id: 3, icon: 'fa-solid fa-handshake-angle', text: 'Collaborative Team Player' }
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h4 className="text-xl md:text-2xl font-medium mb-6 px-4 md:px-16">
            My Technical Skills:
          </h4>
          <div className="flex flex-wrap justify-between px-4 md:px-16">
            {technicalSkills.map((skill) => (
              <SkillBar 
                key={skill.id}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl md:text-2xl font-medium mb-6 px-4 md:px-16">
            My Soft Skills:
          </h4>
          <ul className="px-4 md:px-16">
            {softSkills.map((skill) => (
              <SoftSkill 
                key={skill.id}
                icon={skill.icon}
                text={skill.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;