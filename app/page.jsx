import About from "./components/about";
import Experience from "./components/experiense";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Reviews from "./components/reviews";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Reviews />
    </>
  );
}
