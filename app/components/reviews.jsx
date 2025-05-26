import ReviewsWrapper from "./ui/reviews.wrapper";
import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";

export default function Reviews() {
  return (
    <>
      <SectionWrapper height="min">
        <div className="flex flex-col items-center gap-14">
          <Text text1={"My"} text2={"Testimonial"} type2="bold" />
          <ReviewsWrapper />
        </div>
      </SectionWrapper>
    </>
  );
}
