import Image from "next/image";
import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";
import project1 from "@/app/assets/images/project1.png";
import project2 from "@/app/assets/images/project2.png";
import project3 from "@/app/assets/images/project3.png";
import { icons } from "../utils/icons";

export default function Projects() {
  return (
    <>
      <SectionWrapper type="black" size="large">
        <div className="text-white flex flex-col items-center container mx-auto">
          <Text text1={"My"} text2={"Projects"} type2="bold" />
          <div className="grid grid-cols-2 gap-8 mt-8">
            <Image
              src={project1}
              alt="project1 image"
              className="aspect-auto w-full"
            />
            <div className="flex items-center">
              <div className="flex flex-col gap-7">
                <p className="text-5xl font-bold">01</p>
                <p className="text-4xl font-semibold">
                  Crypto Screener Application
                </p>
                <p className="text-zinc-500">
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book.
                </p>
                <button className="cursor-pointer">{icons.link}</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="flex flex-col gap-7">
                <p className="text-5xl font-bold">02</p>
                <p className="text-4xl font-semibold">
                  Euphoria - Ecommerce (Apparels) Website Template
                </p>
                <p className="text-zinc-500">
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book. when an unknown printer took a galley of type
                  and scrambled it to specimen book.
                </p>
                <button className="cursor-pointer">{icons.link}</button>
              </div>
            </div>

            <Image
              src={project2}
              alt="project2 image"
              className="aspect-auto w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src={project3}
              alt="project3 image"
              className="aspect-auto w-full"
            />
            <div className="flex items-center">
              <div className="flex flex-col gap-7">
                <p className="text-5xl font-bold">03</p>
                <p className="text-4xl font-semibold">Blog Website Template</p>
                <p className="text-zinc-500">
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book.
                </p>
                <button className="cursor-pointer">{icons.link}</button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
