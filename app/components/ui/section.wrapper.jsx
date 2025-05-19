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
    base: "py-8",
    large: "py-16",
  }[size];

  const heightt = {
    base: "min-h-screen",
    min: "h-fit",
  }[height];
  return (
    <>
      <section className={`${style} ${sizee} ${heightt}`}>{children}</section>
    </>
  );
}
