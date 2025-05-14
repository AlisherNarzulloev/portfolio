import About from "./components/about";
import Experience from "./components/experiense";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
    </>
  );
}
