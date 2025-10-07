const ProjectsCard = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover object-top"/>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    View on GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectsCard