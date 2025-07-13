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
