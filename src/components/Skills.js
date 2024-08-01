import React from 'react';

const skills = [
    {name: 'HTML', description: '123321'},
    {name: 'CSS', description: 'Хорошо ориентируюсь в CSS, в частности, CSS версии 3 (градиенты, псевдоселекторы, анимация, Flex, Grid, медиа-запросы и т.д.)'}];

const Skills = () => {
    return (
        <div className="skills">
            <div className='skills-title'>
                <h2 className="skills-title__name">Skills</h2>
            </div>
            <div className='skills-list'>
                {skills.map(skill => 
                    <div className='skill'>
                        <h3 className='skill__name'>{skill.name}</h3>
                        <p className="skill__desc">{skill.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;