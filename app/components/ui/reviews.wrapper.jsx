import man from "@/app/assets/images/man.png";
import woman from "@/app/assets/images/woman.png";
import { icons } from "@/app/utils/icons";
import Image from "next/image";

export default function ReviewsWrapper() {
  const reviews = [
    {
      name: "Evren Shah",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      title: "Designer",
      image: man,
      comment: icons.comment("fill-black", "fill-white"),
    },
    {
      name: "Flora sheen",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      title: "Designer",
      image: woman,
      comment: icons.comment("fill-white", "fill-black"),
    },
    {
      name: "Evren Shah",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      title: "Designer",
      image: man,
      comment: icons.comment("fill-black", "fill-white"),
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-7 w-full xl:w-4/5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`w-full md:w-3/4 lg:w-1/3 p-10 rounded-2xl shadow-2xl ${
              index % 2 === 1 ? "bg-black text-white" : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative">
                <Image
                  src={review.image}
                  className="aspect-square w-24 rounded-full"
                  alt="review"
                />
                <div className="absolute right-0 bottom-0">
                  {review.comment}
                </div>
              </div>
              <p>{review.text}</p>
              <div
                className={`w-1/2 h-0.5 ${
                  index % 2 === 1 ? "bg-white" : "bg-black"
                }`}
              ></div>
              <p className="text-xl font-semibold">{review.name}</p>
              <p
                className={`${
                  index % 2 === 1 ? "text-white" : "text-zinc-500"
                }`}
              >
                {review.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
