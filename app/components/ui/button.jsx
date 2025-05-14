import { icons } from "@/app/utils/icons";

export default function Button({ text, icon }) {
  return (
    <>
      <button className="px-5 py-4 text-white bg-black flex gap-2 rounded-sm items-center text-xl font-semibold cursor-pointer">
        <span>{text}</span>
        {icon && <span>{icons[icon]}</span>}
      </button>
    </>
  );
}
