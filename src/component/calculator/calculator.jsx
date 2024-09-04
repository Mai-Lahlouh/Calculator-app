import { useState , useEffect} from "react";
import "./calculator.css";
export default function Calculator() {
  const [theme, setTheme] = useState(1);

  const handleTheme = (e)=>{
    e.preventDefault();
    const newTheme = parseInt(e.target.value, 10);
    setTheme(newTheme);
    console.log(newTheme);
  }
  useEffect(() => {
    const themeValue = theme === 1 ? "first" : theme === 2 ? "second" : "third";
    document.body.setAttribute('data-theme', themeValue);
    
  }, [theme]); // This effect runs whenever the theme changes


  return (
    <>
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
        <section>{/*Result screen */}</section>
        <section>{/*calculator buttons */}</section>
      </main>
    </>
  );
}
