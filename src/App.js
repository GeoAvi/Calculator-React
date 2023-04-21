/* eslint-disable no-eval */

import { useState } from 'react';
import './index.css';

function App() {


  // result to print the value on the output-screen of the calculator
  //setResult to set the new value to result on click of buttons
  const [result, setResult] = useState('');
  //function to handle the click of button based on the kind of button either operator or number
  const handleclick = (e) => {

    if(e.target.id === 'Del'){
      setResult(result.slice(0, -1));
    } 
    else if(e.target.id === '+/-'){
      setResult(result*-1);
    }
    else if(e.target.id ==='%')
    {
      setResult(eval(result)/100);
    }   
     else if(result==="" && (e.target.id==='+/-' || e.target.id==='%' || e.target.id==='/' || e.target.id==='*' || e.target.id==='+')){

    setResult('Error');
    }
    else{
    setResult(result+e.target.id);
    }
  };

  //function for the equal to button

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  //function for the AC button
  const clear = () => {
    setResult('');
  };

  return (
    <div>
      <h1>Calculator-React</h1>
      <div className='frame'>
        <div className='output-screen'>{result}</div>
        <div className='button-area'>
          <row>
              
              <button id="AC" class="greycol button" onClick={clear}>AC</button>
          
              <button id="+/-" class="greycol button" onClick={handleclick} >+/-</button>
          
              <button id="%" class="greycol button" onClick={handleclick}>%</button>
          
              <button id="/" class="bluecol button" onClick={handleclick}>/</button>
          
          </row>
          <row>
              <button id="7" class="greycol button" onClick={handleclick}>7</button>
              
              <button id="8" class="greycol button" onClick={handleclick}>8</button>
              
              <button id="9" class="greycol button" onClick={handleclick}>9</button>
              
              <button id="*" class="bluecol button" onClick={handleclick}>*</button>
              
          </row>

          <row>
              <button id="4" class="greycol button" onClick={handleclick}>4</button>
              
              <button id="5" class="greycol button" onClick={handleclick}>5</button>
              
              <button id="6" class="greycol button" onClick={handleclick}>6</button>
              
              <button id="-" class="bluecol button" onClick={handleclick}>-</button>

          </row>
          <row>
              <button id="1" class="greycol button" onClick={handleclick}>1</button>
              
              <button id="2" class="greycol button" onClick={handleclick}>2</button>
              
              <button id="3" class="greycol button" onClick={handleclick}>3</button>
              
              <button id="+" class="bluecol button" onClick={handleclick}>+</button>
          </row>
          <row>
              <button id="0" class="greycol button" onClick={handleclick}>0</button>
              
              <button id="." class="greycol button" onClick={handleclick}>.</button>
              
              <button id="Del" class="greycol button" onClick={handleclick}>Del</button>
              
              <button id="=" class="bluecol button" onClick={calculate}>=</button>
          </row>  
        </div>
      </div>
    </div>
  );
}

export default App;
