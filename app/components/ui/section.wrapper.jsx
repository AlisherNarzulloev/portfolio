export default function SectionWrapper({
  children,
  type = "base",
  size = "base",
}) {
  const style = {
    base: "container mx-auto py-16",
    black: "bg-black w-full min-h-screen",
  }[type];

  const sizee = {
    base: "py-8",
    large: "py-16",
  }[size];
  return (
    <>
      <section className={`${style} ${sizee}`}>{children}</section>
    </>
  );
}
