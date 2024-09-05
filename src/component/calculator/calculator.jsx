import { useState, useEffect } from "react";
import "./calculator.css";
import CalcBtn from "../clacButton/calcBtn";
export default function Calculator() {
  const [theme, setTheme] = useState(1);

  const handleTheme = (e) => {
    e.preventDefault();
    const newTheme = parseInt(e.target.value, 10);
    setTheme(newTheme);
    console.log(newTheme);
  };
  useEffect(() => {
    const themeValue = theme === 1 ? "first" : theme === 2 ? "second" : "third";
    document.body.setAttribute("data-theme", themeValue);
  }, [theme]); // This effect runs whenever the theme changes

  let num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  let items = num.map((e) => <CalcBtn value={e} className="btn" />);
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <header className="head">
        <section>calc</section>
        <section className="theme">
          <p>THEME</p>
          <div className="swith-theme">
            <div className="thm-num">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="sw-btn">
              <input
                type="range"
                onChange={handleTheme}
                min={1}
                max={3}
                step={1}
                value={theme}
                className="slider"
                id="slider"
              />
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="result-screen">
          {/*Result screen */}
          <span>399,981</span>
        </section>
        <section className="calc-body">
          {/*calculator buttons */}
          <div className="ro-1">
            {items[0]}
            {items[1]}
            {items[2]}
            <CalcBtn value={"DEL"} className="del-btn" />
          </div>
          <div className="ro-2">
            {items[3]}
            {items[4]}
            {items[5]}
            <CalcBtn value={"+"} className="btn" />
          </div>
          <div className="ro-3">
            {items[6]}
            {items[7]}
            {items[8]}
            <CalcBtn value={"-"} className="btn" />
          </div>
          <div className="ro-4">
            <CalcBtn value={"."} className="btn" />
            {items[9]}
            <CalcBtn value={"/"} className="btn" />
            <CalcBtn value={"x"} className="btn" />
          </div>
          <div className="ro-5">
            <CalcBtn value={"RESET"} className="btn op-btn del-btn" />
            <CalcBtn value={"="} className="btn op-btn equal-btn" />
          </div>
        </section>
      </main>
    </div>
  );
}
