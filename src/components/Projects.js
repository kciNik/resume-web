import React from 'react';

const projects = [
  { name: 'TODO App', url: 'https://kcinik.github.io/TodoApp/', img: 'images/todo_app.jpg' },
  { name: 'Project 2', url: 'http://project2.com', img: 'https://source.unsplash.com/random/200x200?sig=2' },
];

const Projects = () => {
    return (
        <div className="projects">
            <div className='projects-title'>
                <h2 className="projects-title__name">Projects</h2>
            </div>
            <div className="projects-gallery">
                {projects.map(project => (
                    <div className='project'>
                        <div className='project-block'>
                            <img className="project-block__image" src={project.img} alt={project.name} onClick={() => window.open(project.url, '_blank')} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;
