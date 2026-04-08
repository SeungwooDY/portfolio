import './Navbar.modules.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#home">
        <span>Seungwoo</span> Yoon
      </a>
      <a className="nav-button" href="#home">Home</a>
      <a className="nav-button" href="#about-me">About</a>
      <a className="nav-button" href="#projects">Projects</a>
      <a className="nav-button" href="#contact">Contact</a>
    </nav>
  );
}
