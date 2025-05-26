import { icons } from "../utils/icons";
import Cards from "./ui/cards";
import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";

export default function Skills() {
  const skills = [
    {
      text: "JavaScript",
      icon: icons.javascript,
    },
    {
      text: "TypeScript",
      icon: icons.typescript,
    },
    {
      text: "ReactJS",
      icon: icons.react,
    },
    {
      text: "NextJS",
      icon: icons.next,
    },
    {
      text: "Git",
      icon: icons.git,
    },
  ];
  return (
    <>
      <SectionWrapper height="min">
        <div className="flex flex-col items-center gap-8 lg:gap-16 w-full">
          <Text text1={"My"} text2={"Skills"} type2="bold" />
          <Cards icons={skills} type="grid" />
        </div>
      </SectionWrapper>
    </>
  );
}
