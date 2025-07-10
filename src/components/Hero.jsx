import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`w-full min-h-screen overflow-hidden flex flex-row items-center justify-center pt-24 px-4 pb-20 box-border relative sm:px-6 lg:px-8 ${className}`}
    >
      {/* Background Image and Overlay */}
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-start justify-start z-0">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover z-0"
          alt=""
          src="/background-image5@2x.png"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(17,24,39,0.8)] z-1" />
      </div>
      
      {/* Hero Content */}
      <section className="flex flex-row items-start justify-center z-10 text-center text-white font-[Roboto] w-full max-w-4xl">
        <div className="flex flex-col items-center justify-start w-full px-4">
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#d1d5db] px-4">
              A passionate frontend developer specializing in creating stunning,
              responsive web applications with modern technologies and exceptional
              user experiences.
            </p>
          </div>
          
          {/* Social Icons - LinkedIn and GitHub only */}
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:opacity-80 transition-opacity"
              loading="lazy"
              alt="LinkedIn"
              src="/a20.svg"
            />
            <img
              className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:opacity-80 transition-opacity"
              loading="lazy"
              alt="GitHub"
              src="/marginwrap.svg"
            />
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