import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="headers" id="home">
          <h1>Home</h1>
          <h2>Hello my name is Seungwoo Yoon and I am a CS student at the University of Virginia</h2>
        </section>

        <section className="headers" id="about-me">
          <h1>About Me</h1>
        </section>

        <section className="headers" id="projects">
          <h1>Projects</h1>
        </section>

        <section className="headers" id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  );
}
