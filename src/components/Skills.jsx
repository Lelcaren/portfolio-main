import PropTypes from "prop-types";

const Skills = ({ className = "" }) => {
  return (
    <div
      className={`w-full min-h-[586px] flex flex-col items-center justify-start py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-start">
          {/* Header Section */}
          <section className="flex flex-row items-center justify-center pb-8 sm:pb-12 lg:pb-16 text-center">
            <div className="flex flex-row items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-white font-[Roboto] mr-2">
                What I ​
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-[#22d3ee] font-[Roboto]">
                Do
              </h2>
            </div>
          </section>

          {/* Skills Grid Section */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left font-[Roboto]">
            {/* Web Development Card */}
            <div className="rounded-2xl bg-[#22d3ee] flex flex-col items-start justify-start p-6 lg:p-8 text-black min-h-[280px] sm:min-h-[320px]">
              <div className="flex flex-row items-start justify-start pb-4 lg:pb-6">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-8 w-10 lg:h-9 lg:w-[45px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt="Web Development Icon"
                    src="/icon39.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pb-3 lg:pb-4">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="text-xl sm:text-2xl leading-7 lg:leading-8 font-bold">
                    Web Development
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="text-base lg:text-lg leading-6 lg:leading-[29.3px] text-black">
                  Creating responsive, modern websites using the latest
                  technologies including React, TypeScript, and modern CSS
                  frameworks to deliver exceptional user experiences.
                </div>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="rounded-2xl bg-[#1f2937] border-[#374151] border-solid border-[1px] flex flex-col items-start justify-start p-6 lg:p-8 text-white min-h-[280px] sm:min-h-[320px]">
              <div className="flex flex-row items-start justify-start pb-4 lg:pb-6">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-8 w-6 lg:h-9 lg:w-[27px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt="UI/UX Design Icon"
                    src="/icon48.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pb-3 lg:pb-4">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="text-xl sm:text-2xl leading-7 lg:leading-8 font-bold">
                    UI/UX Design
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="text-base lg:text-lg leading-6 lg:leading-[29.3px] text-[#d1d5db]">
                  Designing intuitive and visually appealing user interfaces
                  that prioritize user experience and accessibility across all
                  devices and platforms.
                </div>
              </div>
            </div>

            {/* Performance Optimization Card */}
            <div className="rounded-2xl bg-[#1f2937] border-[#374151] border-solid border-[1px] flex flex-col items-start justify-start p-6 lg:p-8 text-white min-h-[280px] sm:min-h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-row items-start justify-start pb-4 lg:pb-6">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-8 w-8 lg:h-9 lg:w-9 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt="Performance Optimization Icon"
                    src="/icon57.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pb-3 lg:pb-4">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="text-xl sm:text-2xl leading-7 lg:leading-8 font-bold">
                    Performance Optimization
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="text-base lg:text-lg leading-6 lg:leading-[29.3px] text-[#d1d5db]">
                  Optimizing web applications for maximum speed and performance,
                  ensuring fast loading times and smooth user interactions
                  across all devices.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
