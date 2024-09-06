import "./calcBtn.css";
export default function CalcBtn({ value, className, handleClick }) {
  return (
    <>
      <button className={className} onClick={handleClick} name={value}>{value}</button>
    </>
  );
}
