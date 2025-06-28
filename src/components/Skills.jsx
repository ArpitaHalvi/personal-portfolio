import { FaDev } from "react-icons/fa";

const skills = [
  {
    type: "frontend and mobile development",
    names: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "SASS",
      "Bootstrap",
      "TailwindCSS",
      "Flutter",
    ],
  },
  {
    type: "backend & databases",
    names: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
  },
  {
    type: "programming fundamentals and tools",
    names: ["C/C++", "Python", "Java", "Git and GitHub"],
  },
];

export default function Skills() {
  return (
    <section className="skills-part">
      <div className="skill-section">
        <h3>Skills</h3>
        <div className="skills">
          {skills.map((skill, index) => {
            const { type, names } = skill;
            return (
              <div key={index} className="skill">
                <h3>{type}</h3>
                <ul>
                  {names.map((n, index) => {
                    return (
                      <li key={index}>
                        {/* <IconBase className="icon" /> {n} */}
                        <FaDev /> {n}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
