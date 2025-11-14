
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="min-h-screen snap-start flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>

      {/* Project Content */}
      <div className={`project-card opacity-0 translate-y-10 transition-all duration-1000 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 ${
        isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
      }`}>
        
        {/* Project Image */}
        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4 transform group-hover:scale-105 transition-transform duration-500">
            {/* Mock Browser Window */}
            <div className="flex items-center space-x-2 mb-4 px-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 lg:h-80 object-cover rounded-xl"
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-4 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="text-white p-6">
                <p className="text-sm font-medium text-white">View Live Project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
          {/* Project Title */}
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h3>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={project.link}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-white">View Project</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Project Stats or Additional Info */}
          <div className="pt-6 border-t border-white/20">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-white">2024</p>
                <p className="text-sm text-gray-400">Year</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Web App</p>
                <p className="text-sm text-gray-400">Type</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Live</p>
                <p className="text-sm text-gray-400">Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
