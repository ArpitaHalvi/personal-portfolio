import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    socialLink: "https://github.com/ArpitaHalvi",
    icon: <FaGithub className="social-icon" />,
    color: "#181717",
  },
  {
    name: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/arpita-halvi-488990251/",
    icon: <FaLinkedin className="social-icon" />,
    color: "#0077b5",
  },
  {
    name: "Instagram",
    socialLink: "https://www.instagram.com/cingoodvibes/?hl=en",
    icon: <FaInstagram className="social-icon" />,
    color: "#e4405f",
  },
  {
    name: "Gmail",
    socialLink: "mailto:arpitahalvi@gmail.com",
    icon: <GrMail className="social-icon" />,
    color: "#d14836",
  },
  {
    name: "LeetCode",
    socialLink: "https://leetcode.com/u/ArpitaCode",
    icon: <SiLeetcode className="social-icon" />,
    color: "#ffa116",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="footer-section">
      <div className="social-handles">
        {socials.map((social, index) => {
          const { socialLink, icon, color, name } = social;
          return (
            <a
              href={socialLink}
              key={index}
              data-social={name}
              style={{ "--accent-color": color }}
              title={name}
            >
              {icon}
            </a>
          );
        })}
      </div>
      <div className="copyright">
        <p>
          &copy; {year}.
          <br />
          Created by Arpita Halvi.
        </p>
      </div>
    </footer>
  );
}
