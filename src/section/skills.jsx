import React from 'react';
import SkillItem from '../components/skill-item';
import SkillsData from '../data/skills.json';

function Skills() {
    return (
        <div id="skills" className='text-center skill-items flex flex-wrap justify-around m-auto pt-24'>            
            {SkillsData.map((skill) => (
                <SkillItem key={skill.id} name={skill.name} level={skill.level} logo={skill.logo} />
                ))    
            } 
        </div>
    );
}

export default Skills;