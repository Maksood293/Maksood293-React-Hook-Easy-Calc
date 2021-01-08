import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setinput] = useState();
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
  const handleClick = (e) => {
    setinput(input.concat(e.target.name));
  };
  const handleClear = () => {
    setinput("");
  };
  const handleResult = () => {
    setinput(eval(input).toString());
  };
  const handleBack = () => {
    setinput(input.slice(0, -1));
  };
  return (
    <div className="App">
      <div className="calculator">
        <h1>hello from calculator</h1>
        <form>
          <input type="text" value={input} id="result" ref={inputRef} />
        </form>
        <div className="keypad">
          <button id="clear" onClick={handleClear}>
            clear
          </button>
          <button onClick={handleBack}>c</button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button id="result" onClick={handleResult}>
            result
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
