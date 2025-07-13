import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import TechnicalSkills from "../components/TechnicalSkills";
import Contact from "../components/Contact";
import FOOTER from "../components/FOOTER";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start leading-[normal] tracking-[normal] overflow-x-hidden scroll-smooth">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </div>

      <main className="w-full flex flex-col items-start justify-start z-[0]">
        <section id="home" className="w-full min-h-screen bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Hero />
            </div>
          </div>
        </section>

        <section id="skills" className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Skills />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Projects />
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <About />
            </div>
          </div>
        </section>

        <section id="technical-skills" className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <TechnicalSkills />
            </div>
          </div>
        </section>

        <section id="contact" className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Contact />
            </div>
          </div>
        </section>

        <footer className="w-full bg-[#111827]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <FOOTER />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;

