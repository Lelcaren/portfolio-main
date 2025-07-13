import PropTypes from "prop-types";
import { useState } from "react";

const Contact = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div
      className={`w-full min-h-[695px] flex flex-col items-center justify-start py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 text-center font-[Roboto] ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-start">
          {/* Header Section */}
          <div className="flex flex-row items-center justify-center pb-8 sm:pb-12 lg:pb-16">
            <div className="flex flex-row items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-white mr-2">
                Get In ​
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-[#22d3ee]">
                Touch
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
            {/* Contact Information */}
            <div className="flex flex-col items-start justify-start order-2 lg:order-1">
              <div className="pb-6">
                <h3 className="text-xl sm:text-2xl leading-8 font-semibold text-white">
                  Let's work together
                </h3>
              </div>

              <div className="pb-8">
                <div className="text-base sm:text-lg leading-6 sm:leading-[29.3px] text-[#d1d5db]">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a project in mind or just want to
                  chat about technology, feel free to reach out.
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col space-y-4 pb-8 text-sm sm:text-base text-[#d1d5db]">
                <div className="flex items-center">
                  <img
                    className="h-6 w-5 sm:h-7 sm:w-5 mr-4"
                    loading="lazy"
                    alt="Email"
                    src="/div214.svg"
                  />
                  <span className="leading-6">lelcaren11@gmail.com</span>
                </div>

                <div className="flex items-center">
                  <img
                    className="h-6 w-5 sm:h-7 sm:w-5 mr-4"
                    loading="lazy"
                    alt="Phone"
                    src="/div220.svg"
                  />
                  <span className="leading-6">+2545401076</span>
                </div>

                <div className="flex items-center">
                  <img
                    className="h-6 w-4 sm:h-7 sm:w-[15px] mr-4"
                    loading="lazy"
                    alt="Location"
                    src="/div226.svg"
                  />
                  <span className="leading-6">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <img
                  className="h-7 w-5 sm:h-8 sm:w-[21px] cursor-pointer hover:opacity-80 transition-opacity"
                  loading="lazy"
                  alt="LinkedIn"
                  src="/a20.svg"
                />
                <img
                  className="h-7 w-8 sm:h-8 sm:w-[39.3px] cursor-pointer hover:opacity-80 transition-opacity"
                  loading="lazy"
                  alt="Twitter"
                  src="/marginwrap.svg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col items-start justify-start order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-[54px] rounded-lg bg-[#1f2937] border border-[#374151] px-4 py-3 text-base sm:text-lg font-medium text-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-[#ff4d4f]">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-[54px] rounded-lg bg-[#1f2937] border border-[#374151] px-4 py-3 text-base sm:text-lg font-medium text-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all"
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <div className="mt-1 text-sm text-[#ff4d4f]">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full rounded-lg bg-[#1f2937] border border-[#374151] px-4 py-3 text-base sm:text-lg font-medium text-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all resize-vertical min-h-[120px]"
                    placeholder="Your Message"
                  />
                  {errors.message && (
                    <div className="mt-1 text-sm text-[#ff4d4f]">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-10 bg-[#22d3ee] hover:bg-[#0891b2] text-black font-medium text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;

