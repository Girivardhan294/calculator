import "./App.css";
import Button from "./components/Button";
import Show from "./components/Show";
import React, { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (val) => {
    setText((prev) => prev + val);
  };

  const calculate = () => {
    try {
      const output = math.evaluate(text);
      setResult(output);
    } catch (error) {
      setResult("Error");
    }
  };

  const reset = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{borderRadius:"50px"}}>
      <div className="bg-white text-light p-3 p-md-4 rounded-2" style={{ maxWidth: "400px", width: "100%" }}>
        
  
        <div className="mb-3">
          <Show text={text} result={result} />
        </div>


        <div className="row g-2">
          <div className="col-3"><Button symbol="7" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="8" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="9" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="/" handleclick={addText} color="#f2a33c" /></div>

          <div className="col-3"><Button symbol="4" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="5" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="6" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="*" handleclick={addText} color="#f2a33c" /></div>

          <div className="col-3"><Button symbol="1" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="2" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="3" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="+" handleclick={addText} color="#f2a33c" /></div>

          <div className="col-3"><Button symbol="0" handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="." handleclick={addText} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="=" handleclick={calculate} color="#323232cc" /></div>
          <div className="col-3"><Button symbol="-" handleclick={addText} color="#f2a33c" /></div>

          <div className="col-12">
            <Button symbol="clear" handleclick={reset} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
