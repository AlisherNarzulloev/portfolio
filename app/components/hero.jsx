import Image from "next/image";
import Text from "./ui/text";
import Cards from "./ui/cards";
import { icons } from "@/app/utils/icons";
import hero from "@/app/assets/images/banner.png";
import SectionWrapper from "./ui/section.wrapper";

export default function Hero() {
  const social_links = [
    {
      icon: icons.facebook,
      url: "#",
    },
    {
      icon: icons.twitter,
      url: "#",
    },
    {
      icon: icons.linkedin,
      url: "#",
    },
    {
      icon: icons.discord,
      url: "#",
    },
  ];

  return (
    <>
      <SectionWrapper>
        {" "}
        <div className="w-full h-screen flex flex-col gap-16 justify-center relative">
          <div className="relative">
            <div className="w-1/2 text-nowrap relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <Text
                  text1={"Hello I'm"}
                  text2={"Alisher Narzulloev"}
                  type2="bold"
                />
                <Text
                  text1={"Fronted"}
                  text2={"Developer"}
                  type1="bold"
                  type2="outline"
                />
                <Text text1={"Based In"} text2={"Tajikistan"} type2="bold" />
              </div>

              <p className="text-wrap text-zinc-500">
                I'm Alisher Narzulloev Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to
                specimen book.
              </p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0">
              <Image src={hero} className="h-full " alt="hero banner" />
            </div>
          </div>
          <Cards icons={social_links} />
        </div>
      </SectionWrapper>
    </>
  );
}
