export default function Text({ text1, text2, type1 = "base", type2 = "base" }) {
  const styles1 = {
    bold: "font-bold",
    outline: "font-outline-6",
  }[type1];
  const styles2 = {
    bold: "font-bold",
    outline: "font-outline-6 text-white",
  }[type2];

  return (
    <>
      <div className="flex gap-4 text-6xl">
        <span className={styles1}>{text1}</span>
        <span className={styles2}>{text2}</span>
      </div>
    </>
  );
}
