import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Sample project data with local image paths
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/div74@2x.png",
    description: "A full-stack e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    skills: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Express.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce",
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and management"
    ]
  },
  {
    id: 2,
    title: "Social Media App",
    image: "/div81@2x.png",
    description: "A responsive social media application with real-time messaging, post sharing, and user interactions. Built with React and Firebase for seamless user experience.",
    skills: ["React", "Firebase", "Socket.io", "CSS3", "JavaScript", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/social-app",
    keyFeatures: [
      "Real-time messaging and notifications",
      "Post sharing with image upload",
      "User profiles and connections",
      "Like, comment, and share functionality",
      "Responsive design for all devices",
      "Firebase authentication"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/div88@2x.png",
    description: "A modern, responsive portfolio website showcasing my work and skills. Features smooth animations, dark mode toggle, and optimized performance.",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    keyFeatures: [
      "Smooth animations and transitions",
      "Dark/light mode toggle",
      "Responsive design",
      "SEO optimized",
      "Fast loading times",
      "Contact form integration"
    ]
  },
  {
    id: 4,
    title: "Task Management",
    image: "/div95@2x.png",
    description: "A comprehensive task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
    skills: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Express.js", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/task-manager",
    keyFeatures: [
      "Drag-and-drop task organization",
      "Team collaboration tools",
      "Progress tracking and analytics",
      "Real-time updates",
      "File attachments",
      "Deadline notifications"
    ]
  },
  {
    id: 5,
    title: "Weather Dashboard",
    image: "/div102@2x.png",
    description: "An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather information with beautiful data visualizations.",
    skills: ["JavaScript", "Chart.js", "Weather API", "CSS3", "HTML5", "Local Storage"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    keyFeatures: [
      "Real-time weather data",
      "5-day weather forecast",
      "Location-based weather",
      "Interactive charts and graphs",
      "Weather alerts and notifications",
      "Favorite locations"
    ]
  },
  {
    id: 6,
    title: "Chat Application",
    image: "/div109@2x.png",
    description: "A real-time chat application supporting multiple rooms, file sharing, and emoji reactions. Built with Socket.io for instant messaging capabilities.",
    skills: ["React", "Socket.io", "Node.js", "MongoDB", "Express.js", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/chat-app",
    keyFeatures: [
      "Real-time messaging",
      "Multiple chat rooms",
      "File sharing capabilities",
      "Emoji reactions",
      "User presence indicators",
      "Message history"
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-gray-800 group">
        {/* Image Section */}
        <div className="aspect-[4/3] w-full bg-white flex items-center justify-center overflow-hidden p-4">
          {!imageError ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-110 shadow-lg ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg m-4"></div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold rounded-lg text-center p-4">
              {project.title}
            </div>
          )}
        </div>
        
        {/* Project Info Section */}
        <div className="p-6">
          <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors mb-4 text-sm font-medium"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          
          {/* Expandable Details */}
          {showDetails && (
            <div className="space-y-4 border-t border-gray-700 pt-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Key Features</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm flex-1 justify-center"
                >
                  <span className="text-xs">↗</span>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm flex-1 justify-center"
                >
                  <span className="text-xs">⚡</span>
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ className = "" }) => {
  return (
    <div className={`w-full min-h-screen bg-gray-800 flex flex-col items-center justify-start py-20 px-6 ${className}`}>
      <div className="w-full max-w-7xl">
        <section className="flex flex-row items-start justify-center pb-16 text-center">
          <div className="flex flex-row items-center justify-center">
            <h2 className="text-4xl font-bold text-white mr-2 font-roboto">
              Featured{" "}
            </h2>
            <h2 className="text-4xl font-bold text-cyan-400 font-roboto">
              Projects
            </h2>
          </div>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
