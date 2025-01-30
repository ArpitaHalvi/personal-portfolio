import { IconBase } from "react-icons";

const skills = [
  {
    type: "front-end",
    names: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "SASS",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    type: "back-end",
    names: ["Node.js", "Express.js", "PHP"],
  },
  {
    type: "databases",
    names: ["MySQL", "MongoDB"],
  },
  {
    type: "additional skills",
    names: ["C/C++", "Python", "Java", "Git and GitHub"],
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <h2>a bit about me</h2>
        <p>
          Hey Everyone, My name is Arpita Halvi. I am a third-year student
          currently pursuing a Bachelor&apos;s degree in Computer Applications.
          I am a person who is zealous about professional as well personal
          development. I am aspiring to be a Full Stack Web Developer seeking to
          expand my horizons in both Front-end and Back-end technologies.
          Currently passionate about MERN Stack. With hands-on experience in
          HTML, CSS, JavaScript, and Node.js, I enjoy crafting clean, efficient,
          and user-friendly web applications. Currently, I am honing my
          expertise in modern frameworks like React and Express, while working
          on various personal and academic projects that showcase my
          problem-solving abilities and creativity. My goal is to contribute to
          innovative web solutions that make a meaningful impact, while
          continously growing as a developer.
        </p>
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
                          <IconBase className="icon" /> {n}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
