import ReactLogo from "./assets/react.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <a href="https://react.dev/" target="_blank">
          <img src={ReactLogo} alt="React Logo" />
        </a>
      </div>
      <div className="Navbar-links">
        <a
          href="http://www.m89islam.somee.com/lab10a.asp"
          className="Navbar-link"
        >
          Part A
        </a>
        <a
          href="https://cs.torontomu.ca/~m89islam/lab10b.html"
          className="Navbar-link"
        >
          Part B
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
