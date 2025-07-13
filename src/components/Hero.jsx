import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`w-full min-h-screen overflow-hidden flex items-center justify-center pt-24 px-4 pb-20 relative sm:px-6 lg:px-8 ${className}`}
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/background-image5@2x.png"
        />
        <div className="absolute inset-0 bg-[rgba(17,24,39,0.8)]" />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 text-center text-white font-[Roboto] max-w-4xl w-full">
        <div className="flex flex-col items-center px-4">
          {/* Main Title */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2 sm:gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I am
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#22d3ee]">
              Caren Jelimo
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8 max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#d1d5db]">
              A passionate frontend developer specializing in creating stunning,
              responsive web applications using modern technologies and delivering
              exceptional user experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/caren-jelimo-4844a7370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:opacity-80 transition-opacity"
                src="/a20.svg"
                alt="LinkedIn Icon"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Lelcaren"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:opacity-80 transition-opacity"
                src="/marginwrap.svg"
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
