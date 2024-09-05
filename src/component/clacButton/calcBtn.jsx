import "./calcBtn.css";
export default function CalcBtn({ value, className }) {
  return (
    <>
      <button className={className}>{value}</button>
    </>
  );
}
