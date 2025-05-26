import { icons } from "@/app/utils/icons";
import Button from "./button";
import Cards from "./cards";

export default function Form() {
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
      <form className="flex flex-col gap-5 w-full md:w-2/3 lg:w-full">
        <fieldset className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="border-2 rounded-sm py-4 px-6"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="border-2 rounded-sm py-4 px-6"
          />
          <input
            type="text"
            name="website"
            placeholder="Your website (if exist)"
            className="border-2 rounded-sm py-4 px-6"
          />
          <textarea
            name="comment"
            placeholder="How can I help?*"
            className="border-2 rounded-sm py-4 px-6 h-36"
            required
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 xl:gap-8">
          <Button text={"Get in touch"} />
          <Cards icons={social_links} />
        </fieldset>
      </form>
    </>
  );
}
