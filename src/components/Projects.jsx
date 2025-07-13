import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Sample project data with local image paths
const projectsData = [
{
  id: 1,
  title: "Hotel Booking Website",
  image: "/azure.png",
  description: "A modern, responsive hotel booking website built with TypeScript and React. The platform allows users to browse available rooms, make reservations, and manage their bookings. It includes an admin dashboard for managing room availability, pricing, and bookings.",
  skills: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
  liveUrl: "https://azurey.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/azure",
  keyFeatures: [
    "Room listings with filters for price, availability, and amenities",
    "Secure user authentication and profile management",
    "Booking system with real-time availability",
    "Payment processing integration (e.g., Stripe or PayPal)",
    "Admin dashboard for room, booking, and user management",
    "Responsive design for mobile and desktop devices"
  ]
},

 {
  id: 3,
  title: "Property Listing Platform",
  image: "/dhouse.png",
  description: "A user-friendly, responsive web platform for listing and discovering real estate properties. Designed for both property sellers and buyers, the website features advanced filtering, property details, and user management. Built with TypeScript, React, and Next.js for high performance and scalability.",
  skills: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript"],
  liveUrl: "https://dehouses.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/dhouse",
  keyFeatures: [
    "Property listings with images and detailed descriptions",
    "Search and filtering by location, price, and type",
    "User authentication and profile management",
    "Property submission and management dashboard",
    "SEO optimization for wider property reach",
    "Responsive design for mobile and desktop users"
  ]
},

 {
  id: 2,
  title: "VA & Study Abroad Platform",
  image: "/belly.png",
  description: "A professional platform designed to connect clients with skilled virtual assistants and provide comprehensive support for individuals seeking study abroad opportunities. Built with React and Firebase for a secure and seamless user experience.",
  skills: ["React", "Firebase", "Socket.io", "CSS3", "JavaScript", "Material-UI"],
  liveUrl: "https://belyote.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/Belyotte",
  keyFeatures: [
    "Browse and hire experienced virtual assistants",
    "Dedicated job board for VAs and clients",
    "Study abroad application guidance and resources",
    "Secure user authentication and profile management",
    "Real-time communication features",
    "Responsive design for all devices"
  ]
},
  {
  id: 4,
  title: "Nutrition Consultation Website",
  image: "/karima.png",
  description: "A sleek and informative website for a nutrition consultant offering personalized dietary advice, wellness plans, and virtual consultations. Built for client engagement and educational content delivery with a focus on simplicity and accessibility.",
  skills: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Express.js", "Socket.io"],
  liveUrl: "https://wek.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/Wellness",
  keyFeatures: [
    "Client onboarding and profile creation",
    "Booking system for consultation sessions",
    "Educational blog on nutrition and wellness",
    "Customized meal plans and health tips",
    "Contact form and real-time chat support",
    "Responsive design for all devices"
  ]
},

 {
  id: 5,
  title: "Rental Billing System",
  image: "/roysa.png",
  description: "A full-stack rental billing system designed for Kenyan landlords to manage properties, tenants, and billing efficiently. The platform offers automated rent calculations, M-Pesa integration, and real-time payment tracking with a user-friendly dashboard.",
  skills: ["JavaScript", "Node.js", "Express.js", "MongoDB", "React", "M-Pesa API", "Chart.js"],
  liveUrl: "https://mwangazay.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/mwangaza-rentals",
  keyFeatures: [
    "Multi-property and tenant management",
    "Automated rent billing and receipts",
    "M-Pesa payment integration",
    "Real-time payment tracking and history",
    "Visual dashboards with charts and summaries",
    "Responsive design for mobile and desktop access"
  ]
},

 {
  id: 6,
  title: "Virtual Assistant Client Platform",
  image: "/Virtual.png",
  description: "A responsive web platform developed for a company to help clients find and hire skilled virtual assistants. The system includes client onboarding, VA listings, messaging features, and a streamlined matching process.",
  skills: ["React", "Socket.io", "Node.js", "MongoDB", "Express.js", "JWT"],
  liveUrl: "https://virtualstaffing.netlify.app/",
  githubUrl: "https://github.com/Lelcaren/virtualstaffing",
  keyFeatures: [
    "Client onboarding and account creation",
    "Virtual assistant profiles with skills and experience",
    "Real-time messaging between clients and VAs",
    "Search and filtering for assistant roles",
    "Application tracking and management dashboard",
    "Responsive and user-friendly design"
  ]
}

];

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="group relative">
      {/* Animated background gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl blur-sm opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 group-hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-[1.02]">
        {/* Image Section with modern styling */}
        <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {!imageError ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"></div>
                </div>
              )}
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold text-center p-6">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>{project.title}</div>
              </div>
            </div>
          )}
          
          {/* Floating action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <span className="text-sm">↗</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/90 backdrop-blur-sm hover:bg-gray-900 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <span className="text-sm">⚡</span>
            </a>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          
          {/* Skills with improved styling */}
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 4 && (
              <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs">
                +{project.skills.length - 4} more
              </span>
            )}
          </div>
          
          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          
          {/* Expandable Details */}
          {showDetails && (
            <div className="space-y-4 border-t border-gray-700 pt-4 animate-fadeIn">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Key Features
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold text-lg leading-none">•</span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* All Skills */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm flex-1 justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <span className="text-sm">🌐</span>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm flex-1 justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <span className="text-sm">⚡</span>
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
        <section className="flex flex-col items-center justify-center pb-16 text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold text-white">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore my latest work and creative solutions
            </p>
          </div>
          <div className="w-24 h-1 bg-cyan-400 rounded-full"></div>
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