import "./App.css";
import Button from './components/Button';
import Show from './components/Show';
import React, { useState } from 'react';
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
    <>

    <div className='App'>
      <div className='wrap'>
        <Show text={text} result={result} />

        <div className="row1">
          <Button symbol="7" handleclick={addText} color="#323232cc" />
          <Button symbol="8" handleclick={addText} color="#323232cc"/>
          <Button symbol="9" handleclick={addText} color="#323232cc" />
          <Button symbol="/" handleclick={addText} color="#f2a33c" />
        </div>

        <div className="row1">
          <Button symbol="4" handleclick={addText} color="#323232cc"/>
          <Button symbol="5" handleclick={addText} color="#323232cc"/>
          <Button symbol="6" handleclick={addText} color="#323232cc"/>
          <Button symbol="*" handleclick={addText} color="#f2a33c" />
        </div>

        <div className="row1">
          <Button symbol="1" handleclick={addText} color="#323232cc"/>
          <Button symbol="2" handleclick={addText} color="#323232cc"/>
          <Button symbol="3" handleclick={addText} color="#323232cc"/>
          <Button symbol="+" handleclick={addText} color="#f2a33c" />
        </div>

        <div className="row1">
          <Button symbol="0" handleclick={addText} color="#323232cc"/>
          <Button symbol="." handleclick={addText} color="#323232cc"/>
          <Button symbol="=" handleclick={calculate} color="#323232cc"/>
          <Button symbol="-" handleclick={addText} color="#f2a33c" />
        </div>

        <Button symbol="clear" handleclick={reset} color="red" />
      </div>
    </div>
    </>
  );
};

export default App;
