import Image from "next/image";
import SectionWrapper from "./ui/section.wrapper";
import about from "@/app/assets/images/about.png";
import Text from "./ui/text";

export default function About() {
  return (
    <>
      <SectionWrapper>
        <div className="grid grid-cols-2">
          <Image src={about} alt="about section image" className="w-3/4 " />
          <div className="flex items-center">
            <div className="flex flex-col justify-between h-3/4">
              <Text text1={"About"} text2={"Me"} type2="bold" />
              <p className="text-zinc-500">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="text-zinc-500">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="text-zinc-500">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
            </div>
          </div>{" "}
        </div>
      </SectionWrapper>
    </>
  );
}
