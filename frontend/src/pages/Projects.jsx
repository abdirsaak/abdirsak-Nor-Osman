import React from 'react';
// 👇️ CORRECT PATH: Go up one level (from 'pages') then down into 'components'
import ProjectCard from '../components/ProjectsCard'; 

import { projectsData } from '../projects'; 
const Projects = ({ setPage }) => {
    return (
        <div className="w-screen min-h-screen bg-gray-900 text-white p-8 font-sans">
            <button 
                onClick={() => setPage('home')} 
                className="mb-8 text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
            >
                &larr; Back to Home
            </button>
            <h1 className="text-5xl font-bold text-center mb-12">My Projects</h1>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;