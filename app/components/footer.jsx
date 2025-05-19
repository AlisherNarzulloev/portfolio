import Link from "next/link";
import { icons } from "../utils/icons";
import SectionWrapper from "./ui/section.wrapper";

export default function Footer() {
  return (
    <>
      <SectionWrapper type="black" height="min">
        <div className="text-white flex justify-between container mx-auto">
          <Link href={"/"} className="flex items-center gap-3">
            <span>{icons.logo}</span>
            <h5 className="font-bold text-xl">Personal</h5>
          </Link>
          <div className="flex flex-col items-end font-semibold">
            <p>@ 2019-2023 Personal</p>
            <p>Made In Figma</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
