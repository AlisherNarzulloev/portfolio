import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";
import project1 from "@/app/assets/images/project1.png";
import project2 from "@/app/assets/images/project2.png";
import project3 from "@/app/assets/images/project3.png";
import ProjectsWrapper from "./ui/projects.wrapper";

export default function Projects() {
  const projects = [
    {
      number: "01",
      image: project1,
      title: "Crypto Screener Application",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "#",
    },
    {
      number: "02",
      image: project2,
      title: "Euphoria - Ecommerce (Apparels) Website Template",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "#",
    },
    {
      number: "03",
      image: project3,
      title: "Blog Website Template",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: "#",
    },
  ];

  return (
    <>
      <SectionWrapper type="black" size="large">
        <div className="text-white flex flex-col items-center container mx-auto">
          <Text text1={"My"} text2={"Projects"} type2="bold" />
          {projects.map((project, index) => (
            <ProjectsWrapper
              key={index}
              index={index}
              number={project.number}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
