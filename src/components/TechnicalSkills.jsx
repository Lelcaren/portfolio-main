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
                Technical <span className="text-[#22d3ee]">skills.</span>
              </h2>
            </div>
            <div className="text-gray-300 text-lg leading-relaxed">
              <p>
                I specialize in building modern, scalable web applications with a strong
                emphasis on user experience and performance. My technical stack spans from 
                frontend frameworks like React and Vue.js to backend tools such as Node.js 
                and MongoDB. I also have experience with UI design, Git workflows, and API 
                integration.
              </p>
            </div>
          </div>

          {/* Right side - Skills badges */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
              "Next.js", "Vue.js", "Tailwind", "SASS", "Node.js",
              "MongoDB", "Git", "UI Design"
            ].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] rounded-full text-sm font-medium hover:bg-[#22d3ee] hover:text-black transition-colors duration-200"
              >
                {skill.toUpperCase()}
              </div>
            ))}
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
