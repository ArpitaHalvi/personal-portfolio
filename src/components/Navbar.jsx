import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";

const links = [
  { name: "Home", url: "/personal-portfolio" },
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <FaLaptopCode className="logo-icon" />
      </div>
      <ul className={`links-container ${isOpen ? "open" : ""}`}>
        {links.map((link, index) => {
          const { name, url } = link;
          return (
            <li className="link" key={index}>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
      <div className="res-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CgClose className="icon" />
        ) : (
          <CiMenuFries className="icon" />
        )}
      </div>
    </nav>
  );
}
