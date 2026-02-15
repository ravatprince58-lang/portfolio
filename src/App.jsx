import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import GithubProjects from "./components/GIthubProjects.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TEstimonials from "./components/TEstimonials.jsx";
import HEro from "./components/HEro.jsx";
// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition duration-300 scroll-smooth">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" data-aos="fade-up">
        <HEro />
      </section>

      {/* About */}
      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="education" data-aos="fade-up">
        <Education />
      </section>

      {/* Skills */}
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <section id="ahievements" data-aos="fade-up">
        <Achievements />
      </section>
      {/* Github Projects */}
      {/* <section id="github" data-aos="fade-up">
        <GithubProjects />
      </section> */}

      {/* Testimonials */}
      <section id="testimonials" data-aos="fade-up">
        <TEstimonials />
      </section>

      

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
