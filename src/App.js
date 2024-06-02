import React,{useState,useRef} from "react"; 
import "./App.css";
import Buttons from './components/Buttons';
import Keyboard from "./components/Keyboard";
import ToggleButton from "./components/ToggleButton"
  function App() { 
    const inputRef = useRef(null); 
    const [result, setResult] = useState(); 
    const [darkMode,setDarkMode]=useState(false);
    
    return ( 
      <div className="App">
        <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/>
        <form> 
          <p id="result"> 
            {result}
          </p> 
          <input 
            ref={inputRef} 
            type="text"  inputMode='decimal'
            placeholder="0" 
            readOnly
          /> 
          <Buttons inputRef={inputRef} setResult={setResult} result={result}/>
        </form>
        <Keyboard inputRef={inputRef} setResult={setResult} result={result}/> 
      </div> 
    ); 
  } 
   
  export default App; 
  