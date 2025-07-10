import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-[#111827] py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image with floating badges */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Profile image */}
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  alt="Profile"
                  src="/div120@2x.png"
                />
              </div>
              
              {/* Floating skill badges */}
              {/* JS badge - top right */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">JS</span>
              </div>
              
              {/* HTML5 badge - left */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">5</span>
              </div>
              
              {/* React badge - bottom */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">⚛</span>
              </div>
              
              {/* CSS3 badge - right */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">3</span>
              </div>
              
              {/* Additional decorative badge - top left */}
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#22d3ee] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xs">⚡</span>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            {/* Section header */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">MY BIO</p>
              <h2 className="text-4xl font-bold text-white font-[Roboto] mq450:text-[22px] mq450:leading-6 mq750:text-[29px] mq750:leading-8">
                About{" "}
                <span className="text-[#22d3ee]">me.</span>
              </h2>
            </div>

            {/* About text */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Velit quis pulvinar sed risus diam. Commodo tincidunt tincidunt ultrices 
                faucibus nullam netus nec. Nulla sit lacus aliquam vulputate viverra 
                habitasse convallis. Enim felis ipsum nec sed hendrerit tristique 
                porttitor. Mi cras dui in integer amet ut quis nam.
              </p>
              
              <p>
                Convallis tincidunt posuere nibh cras non morbi in varius arcu. Et libero 
                diam sit risus tincidunt. Urna suscipit lectus magna amet sollicitudin 
                morbi vestibulum. Sagittis enim a congue massa dictum. Tellus 
                fermentum elit duis non. Arcu mus cursus ornare sagittis metus viverra.
              </p>
              
              <p>
                Amet sed nisl commodo congue quisque. Eu odio sed arcu amet amet 
                eget eros vestibulum pulvinar. Ultrices ultrices ipsum vel amet nunc 
                faucibus non. Hendrerit faucibus quis dolor augue neque. Ullamcorper 
                semper tellus id netus tincidunt commodo.
              </p>
            </div>

            {/* Resume button */}
            <div className="pt-4">
              <button className="bg-[#22d3ee] hover:bg-[#1dd1e8] text-black font-medium px-8 py-4 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>View Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;