import { FaArrowRight } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="intro-section" id="intro">
      <div>
        <h1>Arpita Halvi</h1>
        <p>Full Stack Developer | MERN Stack Developer</p>
        <a href="#footer">
          Connect with me
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
