import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <div className={`w-full bg-[#111827] py-20 px-4 sm:px-6 lg:px-8 ${className}`} id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  alt="Profile"
                  src="/div120@2x.png"
                />
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">MY BIO</p>
              <h2 className="text-4xl font-bold text-white font-[Roboto]">
                About <span className="text-[#22d3ee]">me.</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate front-end developer with a strong foundation in building responsive,
                user-centered web applications. I specialize in React, TypeScript, and Tailwind CSS,
                and have hands-on experience creating full-stack solutions for real-world clients and startups.
              </p>

              <p>
                Over the past year, I've worked on diverse projects—from rental billing systems for Kenyan landlords,
                to virtual assistant hiring platforms, and property listing websites. Each project taught me how to
                solve unique business challenges through clean UI/UX and solid backend integration.
              </p>

              <p>
                I'm always eager to learn and expand my skillset. Currently, I'm mastering design-to-code workflows with
                Figma and React, and plan to dive into machine learning soon. I believe in writing clean, maintainable
                code and creating digital products that genuinely help people.
              </p>
            </div>

            {/* Resume button with Google Docs link */}
            <div className="pt-4">
              <a
                href="https://docs.google.com/document/d/18ewWDv6VYT68tdr3_KdIdk-afty_omAkLsBPzs_h784/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22d3ee] hover:bg-[#1dd1e8] text-black font-medium px-8 py-4 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>View Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
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


