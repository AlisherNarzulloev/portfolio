import Link from "next/link";

export default function HeaderLinks() {
  const links = [
    {
      text: "About Me",
      url: "#about",
    },
    {
      text: "Skills",
      url: "#skills",
    },
    {
      text: "Projects",
      url: "#projects",
    },
    {
      text: "Contact Me",
      url: "#contact",
    },
  ];
  return (
    <>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.url} className="text-xl font-semibold">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
