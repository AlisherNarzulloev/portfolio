import { icons } from "../utils/icons";
import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";

export default function Experience() {
  const experiences = [
    {
      title: "Lead Software Engineer at Google",
      icon: icons.google,
      start_date: "Nov 2019",
      end_date: "Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      title: "Software Engineer at Youtube",
      icon: icons.youtube,
      start_date: "Jan 2017",
      end_date: "Oct 2019",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
    {
      title: "Junior Software Engineer at Apple",
      icon: icons.apple,
      start_date: "Jan 2016",
      end_date: "Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    },
  ];

  return (
    <>
      <SectionWrapper type="black" size="large">
        <div className="flex flex-col gap-8 text-white items-center container mx-auto">
          <Text text1={"My"} text2={"Experience"} type2="bold" />
          <div className="flex gap-8 flex-col items-center">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="p-8 border border-zinc-500 rounded-2xl flex flex-col gap-8 w-2/3 hover:bg-zinc-800 hover:border-zinc-800 transition duration-200 hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <span className="size-9">{exp.icon}</span>
                    <p className="text-2xl font-semibold">{exp.title}</p>
                  </div>
                  <p>
                    <span>{exp.start_date}</span> - <span>{exp.end_date}</span>
                  </p>
                </div>
                <p className="text-zinc-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
