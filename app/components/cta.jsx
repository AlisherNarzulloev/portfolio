import Form from "./ui/form";
import SectionWrapper from "./ui/section.wrapper";
import Text from "./ui/text";

export default function Cta() {
  return (
    <>
      <SectionWrapper>
        <div className="grid grid-cols-2 gap-28">
          <Form />
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <Text text1={"Let's"} type1="bold" size="display" />
                <Text text2={"talk"} type2="outline" size="display" />
                <Text text1={"for"} type1="bold" size="display" />
              </div>
              <div className="flex gap-4">
                <Text text1={"Something"} type1="bold" size="display" />
                <Text text1={"special"} type1="bold" size="display" />
              </div>
            </div>
            <p className="text-zinc-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:alishernarzylloev@gmail.com"
                className="text-3xl font-semibold"
              >
                alishernarzylloev@gmail.com
              </a>
              <a href="tel:+992882280220" className="text-3xl font-semibold">
                +992882280220
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
