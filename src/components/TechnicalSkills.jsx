import PropTypes from "prop-types";

const TechnicalSkills = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-[#1f2937] py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white font-[Roboto] mq450:text-[22px] mq450:leading-6 mq750:text-[29px] mq750:leading-8">
                Technical{" "}
                <span className="text-[#22d3ee]">skills.</span>
              </h2>
            </div>
            <div className="text-gray-300 text-lg leading-relaxed">
              <p>
                Velit quis pulvinar sed risus diam. Commodo tincidunt 
                tincidunt ultrices faucibus nullam netus nec. Nulla sit lacus 
                aliquam vulputate viverra habitasse convallis. Enim felis ipsum 
                nec sed hendrerit tristique porttitor. Mi cras dui in integer 
                amet ut quis nam.
              </p>
            </div>
          </div>

          {/* Right side - Skills badges */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-full text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                HTML5
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                JAVASCRIPT
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-full text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                CSS3
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                REACT
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                TAILWIND
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                UI DESIGN
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                TYPESCIPT
              </div>
            </div>

            {/* Additional skills */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                NEXT.JS
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                VUE.JS
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                NODE.JS
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                SASS
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                GIT
              </div>
              <div className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-2xl text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200">
                MONGODB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TechnicalSkills.propTypes = {
  className: PropTypes.string,
};

export default TechnicalSkills;
