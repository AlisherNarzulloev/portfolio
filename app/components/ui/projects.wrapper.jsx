import { icons } from "@/app/utils/icons";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsWrapper({
  index,
  number,
  image,
  title,
  description,
  link,
}) {
  return (
    <>
      <div key={number} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div
          className={`aspect-auto w-full overflow-hidden ${
            index % 2 === 1 ? "md:order-2" : ""
          }`}
        >
          <Image src={image} alt="project1 image" className="w-full" />
        </div>
        <div
          className={`flex md:items-center ${
            index % 2 === 1 ? "md:order-1" : ""
          }`}
        >
          <div className="flex flex-col gap-7">
            <p className="text-3xl md:text-5xl font-bold">{number}</p>
            <p className="text-2xl md:text-4xl font-semibold">{title}</p>
            <p className="text-zinc-500">{description}</p>
            <Link href={link} className="cursor-pointer">
              {icons.link}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
