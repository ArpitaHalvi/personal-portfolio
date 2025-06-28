// import laptop from "../../public/images/laptop.jpg";
import webDev from "../images/web-dev.svg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-dev">
        <h2>
          Hello, <br /> I’m Arpita Halvi.
        </h2>
        <div className="bottom-line"></div>
        <p>
          I have completed my Bachelor’s in Computer Applications and am focused
          on building a career as a Full Stack Web Developer with a
          specialization in the MERN stack. I have practical experience working
          with HTML, CSS, JavaScript, Node.js, and databases like MongoDB.
        </p>
        <p>
          Currently, I am developing projects using React and Express, and also
          exploring Flutter for cross-platform mobile application development.
          My work includes both academic and personal projects that demonstrate
          an understanding of modern web technologies, clean code practices, and
          effective problem-solving.
        </p>
        <p>
          I aim to contribute to well-structured, scalable, and efficient
          software solutions, while continuously improving my technical
          capabilities.
        </p>
      </div>
      <div className="about-me">
        <img src={webDev} alt="About section image" loading="lazy" />
      </div>
    </section>
  );
}
