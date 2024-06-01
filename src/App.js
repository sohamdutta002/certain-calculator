import React,{useState,useRef} from "react"; 
  import "./App.css";
import Buttons from './components/Buttons';
import Keyboard from "./components/Keyboard";
  function App() { 
    const inputRef = useRef(null); 
    const [result, setResult] = useState(0); 
       
    return ( 
      <div className="App"> 
        <div> 
          <h1>Calculator</h1> 
        </div> 
        <form> 
          <p> 
            {result}
          </p> 
          <input 
            ref={inputRef} 
            type="text"  inputMode='decimal'
            placeholder="Type a number" 
            readOnly
          /> 
          <Buttons inputRef={inputRef} setResult={setResult} result={result}/>
        </form>
        <Keyboard inputRef={inputRef} setResult={setResult} result={result}/> 
      </div> 
    ); 
  } 
   
  export default App; 
  