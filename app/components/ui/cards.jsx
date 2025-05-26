import Link from "next/link";

export default function Cards({ icons, type = "base" }) {
  const style = {
    base: "flex gap-6 xl:gap-8",
    grid: "flex justify-center lg:justify-around w-full flex-wrap lg:flex-nowrap gap-4",
  }[type];

  return (
    <>
      <div className={style}>
        {icons.map((icon, index) =>
          icon.url ? (
            <Link
              key={index}
              href={icon.url}
              className="border-2 rounded-sm p-4 xl:p-6 flex justify-center items-center hover:bg-black transition duration-200 hover:fill-white fill-black"
            >
              {icon.icon}
            </Link>
          ) : (
            <div
              key={index}
              className="border-2 rounded-sm p-6 justify-center items-center hover:bg-black transition duration-200 group flex flex-col gap-8 aspect-square w-36 md:w-56"
            >
              <span>{icon.icon}</span>
              <span className="group-hover:text-white transition duration-200 text-xl font-semibold">
                {icon.text}
              </span>
            </div>
          )
        )}
      </div>
    </>
  );
}
