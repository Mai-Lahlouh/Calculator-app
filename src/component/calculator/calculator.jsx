import { useState, useEffect } from "react";
import "./calculator.css";
import CalcBtn from "../clacButton/calcBtn";
export default function Calculator() {
  const [theme, setTheme] = useState(1);
  const [result, setResult] = useState("");
  const [newResult, setNewResult] = useState(false);
  const opperation = ["+", "-", "/", "x"];

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

  const handleClick = (e) => {
    //If an operation button is clicked right after displaying the result from the = button, allow the user to continue calculations with the result.
    if (newResult && opperation.includes(e.target.name)) {
      setNewResult(false);
      setResult(result.concat(e.target.name));
    } else if (newResult) {
      setResult(e.target.name);
      setNewResult(false);
    } else {
      const lastNumber = result.split(/[+\-\x/]/).pop(); // Split by operators and get the last numbe
      if (
        (opperation.includes(e.target.name) && result === "") ||
        (opperation.includes(e.target.name) &&
          opperation.includes(result.slice(-1))) || //Prevent the user from entering more than one decimal point in a single number.
        (e.target.name === "." && lastNumber.includes(".")) // Only check the current number for a decimal
      ) {
        return;
      }
      setResult(result.concat(e.target.name));
    }
  };

  const handleDel = () => {
    setResult(result.slice(0, -1));
  };

  const handleClear = () => {
    setResult("");
    setNewResult(false);
  };

  const handleResult = () => {
    try {
      let calculation = eval(result.replace(/x/g, "*")).toString(); //correct mul opperation
      if (calculation.length > 10) {
        calculation = calculation.slice(0, 10); // Limit the result to 10 characters
      }
      if (result.includes("/0")) {
        setResult("ERROR");
      } else {
        setResult(calculation);
      }
    } catch {
      setResult("ERROR");
    }
    setNewResult(true);
  };

  let num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  let items = num.map((e) => (
    <CalcBtn value={e} className="btn" handleClick={handleClick} />
  ));

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
          <span>{result}</span>
        </section>
        <section className="calc-body">
          <div className="ro-1">
            {items[0]}
            {items[1]}
            {items[2]}
            <CalcBtn
              value={"DEL"}
              className="del-btn"
              handleClick={handleDel}
            />
          </div>
          <div className="ro-2">
            {items[3]}
            {items[4]}
            {items[5]}
            <CalcBtn value={"+"} className="btn" handleClick={handleClick} />
          </div>
          <div className="ro-3">
            {items[6]}
            {items[7]}
            {items[8]}
            <CalcBtn value={"-"} className="btn" handleClick={handleClick} />
          </div>
          <div className="ro-4">
            <CalcBtn value={"."} className="btn" handleClick={handleClick} />
            {items[9]}
            <CalcBtn value={"/"} className="btn" handleClick={handleClick} />
            <CalcBtn value={"x"} className="btn" handleClick={handleClick} />
          </div>
          <div className="ro-5">
            <CalcBtn
              value={"RESET"}
              className="btn op-btn del-btn"
              handleClick={handleClear}
            />
            <CalcBtn
              value={"="}
              className="btn op-btn equal-btn"
              handleClick={handleResult}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
