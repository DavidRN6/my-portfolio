import { myProject } from "./MyProject";
import "./main.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Main() {
  return (
    <main id="projects">
      <section className="project">
        {myProject.map((item) => (
          <motion.article
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="card"
          >
            <img loading="lazy" src={item.image} alt={item.name} />

            <div className="box">
              <h3 className="name">{item.name}</h3>
              <p className="info">{item.info}</p>

              <div className="link">
                <div>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>

                  <a href={item.code} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow"
                >
                  View Project{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}

export default Main;
