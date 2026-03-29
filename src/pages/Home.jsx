import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Capabilities from "../components/Capabilities";
import Testimonials from "../components/Testimonials";
import CaseStudies from "../components/CaseStudies";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Projects />
      <CaseStudies />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}