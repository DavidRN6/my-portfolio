import "./footer.css";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("skills")}>Skills</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
        </li>
      </ul>

      <p>© David Raoof | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
