import styles from './Navbar.modules.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-button" href="#home">Home</a>
      <a className="nav-button" href="#about-me">About Me</a>
      <a className="nav-button" href="#projects">Projects</a>
      <a className="nav-button" href="#contact">Contact</a>
    </nav>
  )
}