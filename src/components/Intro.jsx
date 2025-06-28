// import { FaArrowRight } from "react-icons/fa";
/* <div>
        <h1>Arpita Halvi</h1>
        <p>Full Stack Developer | MERN Stack Developer</p>
        <a href="#footer">
          Connect with me
          <FaArrowRight />
        </a>
      </div> */

// import { FaNodeJs, FaReact } from "react-icons/fa6";
import Navbar from "./Navbar";
// import { SiExpress, SiMongodb } from "react-icons/si";

export default function Intro() {
  return (
    <section className="intro-section" id="intro">
      <Navbar />
      <div className="fullname">
        <div className="firstname dev-name">
          <div className="initials">{/* <FaReact className="icon" /> */}H</div>
        </div>
        <div className="lastname dev-name">
          <div className="initials">{/* <FaNodeJs className="icon" /> */}A</div>
        </div>
        {/* <div className="firstname dev-name">
          <div className="initials">
            <SiMongodb />
          </div>
        </div>
        <div className="lastname dev-name">
          <div className="initials">
            <SiExpress />
          </div>
        </div> */}
        <div className="dev-intro">
          <h1>Arpita Halvi</h1>
          <p>Full Stack Web Developer | MERN Stack Developer</p>
          <a href="#footer">Hire Me</a>
        </div>
      </div>
    </section>
  );
}
