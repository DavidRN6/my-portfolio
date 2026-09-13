import { PiHeadCircuitFill } from "react-icons/pi";
import "./skills.css";

const skillItem = [
  {
    id: 1,
    Image: "skills/html-icon.webp",
    name: "HTML",
  },
  {
    id: 2,
    Image: "skills/css-icon.webp",
    name: "CSS",
  },
  {
    id: 3,
    Image: "skills/js-icon.webp",
    name: "JavaScript",
  },
  {
    id: 4,
    Image: "skills/typescript.webp",
    name: "TypeScript",
  },
  {
    id: 5,
    Image: "skills/bootstrap-icon.webp",
    name: "Bootstrap",
  },
  {
    id: 6,
    Image: "skills/tailwind.webp",
    name: "Tailwind",
  },
  {
    id: 7,
    Image: "skills/github.webp",
    name: "Git & GitHub",
  },
  {
    id: 8,
    Image: "skills/React-icon.webp",
    name: "React",
  },
  {
    id: 9,
    Image: "skills/redux.webp",
    name: "Redux",
  },
  {
    id: 10,
    Image: "skills/nextjs.webp",
    name: "Next.js",
  },
  {
    id: 11,
    Image: "skills/query.webp",
    name: "React Query",
  },
  {
    id: 12,
    Image: "skills/motion.webp",
    name: "Framer Motion",
  },
  {
    id: 13,
    Image: "skills/AOS.webp",
    name: "AOS",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="content">
        <h2 className="skills-title">
          <span className="skill-icon">
            <PiHeadCircuitFill />
          </span>
          Skills
        </h2>
        <p>
          Here are some of the technologies and tools I have worked with during
          my development journey.
        </p>

        <div className="skills-list">
          {skillItem.map((item) => (
            <div className="skill-item" key={item.id}>
              <img className="skill-img" src={item.Image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
