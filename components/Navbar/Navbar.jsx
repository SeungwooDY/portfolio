import './Navbar.modules.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#home">
        Seungwoo Yoon
      </a>
      <a className="nav-button" href="#home">Home</a>
      <a className="nav-button" href="#about-me">About</a>
      <a className="nav-button" href="#currently">Currently</a>
      <a className="nav-button" href="#projects">Projects</a>
      <a className="nav-button" href="#contact">Contact</a>
    </nav>
  );
}
