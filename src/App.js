import { useState } from "react";
import "./App.css";
import "./KeypadContainer.css";
import "./InputConatainer.css";
import "./button.css";
function App(props) {
  const [result1, setresult1] = useState("");
  const [result2, setresult2] = useState("");
  function ongetValue(e) {
    // console.log(e.target.name);
    setresult2(result2.concat(e.target.name));
  }
  function onChangeHandler(e) {
    setresult2(e.target.value);
  }
  function onAc() {
    setresult1("");
    setresult2("");
  }
  function onDel() {
    setresult2(result2.slice(0, -1));
  }
  function onDecimal() {
    setresult2(result2.concat("."));
  }
  function onEquals() {
    // console.log("On equals called");
    let operator = result1.charAt(result1.length - 1);
    console.log(operator);
    let exp1, exp2;
    exp1 = parseFloat(result1);
    console.log(exp1);
    exp2 = parseFloat(result2);
    console.log(exp2);
    if (operator === "+") {
      setresult2((exp1 + exp2).toLocaleString());
    } else if (operator === "-") {
      setresult2((exp1 - exp2).toLocaleString());
    }
    else if(operator === "*")
    {
      setresult2((exp1 * exp2).toLocaleString());
    }
    else if(operator === "/")
    {
      setresult2((exp1 / exp2).toLocaleString());
    }
    console.log(result2);
  }
  function onOperator(e) {
    // let operator=e.target.name;
    // console.log(operator);
    if (result1 === "") {
      setresult1(result2.concat(e.target.name));
      setresult2("");
    } else {
      // console.log("Hi");
      onEquals();
      setresult1(result2.concat(e.target.name));
      setresult2("");
    }
  }
  return (
    <div className="App">
      <div className="inputContainer">
        <input type="text" className="inputBox1" value={result1} />
        <input
          type="text"
          className="inputBox2"
          value={result2}
          onChange={onChangeHandler}
          autoFocus
        />
      </div>
      <div className="Keypad">
        <button className="button" name="AC" onClick={onAc}>
          AC
        </button>
        <button className="button" name="DEL" onClick={onDel}>
          DEL
        </button>
        <button className="button" name="/" onClick={onOperator}>
          /
        </button>
        <button className="button" name="*" onClick={onOperator}>
          *
        </button>
        <button className="button" name="+" onClick={onOperator}>
          +
        </button>
        <button className="button" name="-" onClick={onOperator}>
          -
        </button>
        <button className="button" name="1" onClick={ongetValue}>
          1
        </button>
        <button className="button" name="2" onClick={ongetValue}>
          2
        </button>
        <button className="button" name="3" onClick={ongetValue}>
          3
        </button>
        <button className="button" name="4" onClick={ongetValue}>
          4
        </button>
        <button className="button" name="5" onClick={ongetValue}>
          5
        </button>
        <button className="button" name="6" onClick={ongetValue}>
          6
        </button>
        <button className="button" name="7" onClick={ongetValue}>
          7
        </button>
        <button className="button" name="8" onClick={ongetValue}>
          8
        </button>
        <button className="button" name="9" onClick={ongetValue}>
          9
        </button>
        <button className="button" name="." onClick={onDecimal}>
          .
        </button>
        <button className="button" name="0" onClick={ongetValue}>
          0
        </button>
        <button className="button" name="=" onClick={onEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
