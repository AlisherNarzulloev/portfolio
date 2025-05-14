import Link from "next/link";
import { icons } from "../utils/icons";
import Button from "./ui/button";
import HeaderLinks from "./ui/links";

export default function Header() {
  return (
    <>
      <header className="py-6 flex justify-between items-center container mx-auto">
        <Link href={"/"} className="flex items-center gap-3">
          <span>{icons.logo}</span>
          <h5 className="font-bold text-xl">Personal</h5>
        </Link>
        <HeaderLinks />
        <Button text={"Resume"} icon={"download"} />
      </header>
    </>
  );
}
