import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
  return (
    <section className="home-page">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </section>
  );
}
