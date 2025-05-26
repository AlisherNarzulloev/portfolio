export default function Text({
  text1,
  text2,
  type1 = "base",
  type2 = "base",
  size = "base",
}) {
  const styles1 = {
    bold: "font-bold",
    outline: "font-outline-6",
  }[type1];
  const styles2 = {
    bold: "font-bold",
    outline: "font-outline-6 text-white",
  }[type2];
  const sizee = {
    base: "text-3xl md:text-5xl xl:text-6xl",
    display: "text-3xl md:text-4xl xl:text-5xl",
  }[size];

  return (
    <>
      <div className={`flex flex-wrap gap-2 md:gap-4 ${sizee}`}>
        {text1 && <span className={styles1}>{text1}</span>}
        {text2 && <span className={styles2}>{text2}</span>}
      </div>
    </>
  );
}
