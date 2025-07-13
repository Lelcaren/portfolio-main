import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="#home">
              <h1 className="text-xl font-bold text-white">Caren Jelimo</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex-shrink-0">
            <a
              href="https://docs.google.com/document/d/18ewWDv6VYT68tdr3_KdIdk-afty_omAkLsBPzs_h784/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-6 py-2 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              My Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

