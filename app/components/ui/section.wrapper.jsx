export default function SectionWrapper({
  children,
  type = "base",
  size = "base",
  height = "base",
}) {
  const style = {
    base: "container mx-auto py-16",
    black: "bg-black w-full",
  }[type];

  const sizee = {
    base: "py-4 md:py-8",
    large: "py-8 md:py-16",
  }[size];

  const heightt = {
    base: "min-h-screen",
    min: "h-fit",
  }[height];
  return (
    <>
      <section className={`${style} ${sizee} ${heightt} px-4 md:px-0`}>
        {children}
      </section>
    </>
  );
}
