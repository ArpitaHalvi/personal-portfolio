import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
  return (
    <section className="home-page">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
