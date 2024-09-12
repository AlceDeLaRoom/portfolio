import React from 'react';
import SkillItem from '../components/skill-item';
import SkillsData from '../data/skills.json';

function Skills() {
    return (
        <div id="skills" className='text-center py-12 w-full'>
            <div className="skill-items flex flex-wrap justify-around m-auto">
                {SkillsData.map((skill) => (
                    <SkillItem key={skill.id} name={skill.name} level={skill.level} />
                    ))    
                }
            </div>   
        </div>
    );
}

export default Skills;