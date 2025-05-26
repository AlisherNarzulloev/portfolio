import Link from "next/link";
import { icons } from "../utils/icons";
import Button from "./ui/button";
import HeaderLinks from "./ui/links";

export default function Header() {
  return (
    <>
      <header className="px-4 md:px-0 py-6 flex justify-between items-center container mx-auto">
        <Link href={"/"} className="flex items-center gap-3">
          <span>{icons.logo}</span>
          <h5 className="font-bold text-xl">Personal</h5>
        </Link>
        <HeaderLinks />
        <div className="hidden md:block">
          <Button text={"Resume"} icon={"download"} />
        </div>
        <div className="block md:hidden">{icons.burger}</div>
      </header>
    </>
  );
}
