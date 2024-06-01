import React,{useState,useRef, useEffect} from "react"; 
  import "./App.css";
import Buttons from './components/Buttons';
import Keyboard from "./components/Keyboard";
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
       
    return ( 
      <div className="App"> 
        <div> 
          <h1>Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result}
          </p> 
          <input 
            ref={inputRef} 
            type="text"  inputMode='decimal'
            placeholder="Type a number" 
          /> 
          <Buttons inputRef={inputRef} setResult={setResult}/>
        </form>
        <Keyboard inputRef={inputRef} setResult={setResult}/> 
      </div> 
    ); 
  } 
   
  export default App; 
  