import React,{useState,useRef} from "react"; 
  import "./App.css";
import Buttons from './components/Buttons';
import Keyboard from "./components/Keyboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
  function App() { 
    const inputRef = useRef(null); 
    const [result, setResult] = useState(); 
    const [darkMode,setDarkMode]=useState(null);

    function toggleMode(){
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark-mode');
    }

    return ( 
      <div className="App">
        <button onClick={toggleMode} className="dark-mode-toggle">
            <FontAwesomeIcon icon={darkMode?faSun:faMoon} />
        </button> 
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
  