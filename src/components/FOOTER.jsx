import PropTypes from "prop-types";

const FOOTER = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-[#111827] border-[#1f2937] border-solid border-t-[1px] box-border flex flex-col items-start justify-start pt-8 px-4 pb-8 sm:px-6 lg:px-8 ${className}`}
    >
      <footer className="w-full max-w-7xl mx-auto text-left text-[#9ca3af] font-[Roboto]">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Logo/Brand */}
          <div className="flex flex-row items-center justify-start">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Caren
            </h3>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 text-base">
            <a href="#home" className="hover:text-white transition-colors cursor-pointer">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors cursor-pointer">
              Contact
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-row items-center justify-center sm:justify-end text-sm order-last sm:order-none">
            <div className="text-center sm:text-right">
              © 2024 Caren Jelimo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

FOOTER.propTypes = {
  className: PropTypes.string,
};

export default FOOTER;