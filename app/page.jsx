import About from "./components/about";
import Experience from "./components/experiense";
import Hero from "./components/hero";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <About />
    </>
  );
}
