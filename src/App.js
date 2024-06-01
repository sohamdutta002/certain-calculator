import {evaluate} from 'mathjs';
import {
    useState,
    useRef, useEffect
  } from "react"; 
  import "./App.css";
  
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    
  useEffect(() => {
    function handleKeyDown(event) {
        if (event.key === 'Enter')
            equal(event);
        else if(event.key>='0'&&event.key<='9')
            appendDigit(event,event.key);
        else if(event.key==='+'){
          event.target.value="+"
          handleClick(event)
        }
        else if(event.key==='-'){
          event.target.value="-"
          handleClick(event)
        }
        else if(event.key==='*'||event.key==='x'){
          event.target.value="x"
          handleClick(event)
        }
        else if(event.key==='/'){
          event.target.value="/"
          handleClick(event)
        }
        else if(event.key==='%'){
          event.target.value="%"
          handleClick(event)
        }
        else if(event.key==='.')
            point(event)
        else if(event.key==='Backspace')
            bckspc(event)
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    function appendDigit(e,digit){
        e.preventDefault()
        inputRef.current.value+=digit;    
    }

    function handleClick(e){
      e.preventDefault()
      const val=e.target.value;
      switch(val){
        case "+":
          inputRef.current.value+="+"
          break;
        case "-":
          inputRef.current.value+="-"
          break;
        case "x":
          inputRef.current.value+="*"
          break
        case "/":
          inputRef.current.value+="/"
          break
        case "%":
          inputRef.current.value+="%"
          break
        case "+-":
          inputRef.current.value*=-1
          break
      }
    }
   
    function resetAll(e) { 
        e.preventDefault()
        inputRef.current.value=""
        setResult("")
    };
    
    function bckspc(e){
        e.preventDefault()
        inputRef.current.value=inputRef.current.value.slice(0,-1)
    }

    function point(e) {
        e.preventDefault()
        if(!inputRef.current.value.includes('.'))
            inputRef.current.value+='.'
    }

    function equal(e) {
        e.preventDefault()
        try{
            const evalResult=evaluate(inputRef.current.value);
            console.log(String(evalResult))
            setResult(evalResult)
            inputRef.current.value=""
            
        }
        catch(error){
            alert("Invalid Calculation")
        }
    }
       
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
          <div className=" Btn Row">
            <button onClick={resetAll}>C</button>
            <button onClick={handleClick} value="%">%</button>   
            <button onClick={handleClick} value="/">/</button>   
            <button onClick={bckspc}>&#9003;</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'7')}>7</button>
            <button onClick={(e)=>appendDigit(e,'8')}>8</button>
            <button onClick={(e)=>appendDigit(e,'9')}>9</button>
            <button onClick={handleClick} value="x">X</button>
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'4')}>4</button>
            <button onClick={(e)=>appendDigit(e,'5')}>5</button>
            <button onClick={(e)=>appendDigit(e,'6')}>6</button>
            <button onClick={handleClick} value="-">-</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'1')}>1</button>
            <button onClick={(e)=>appendDigit(e,'2')}>2</button>
            <button onClick={(e)=>appendDigit(e,'3')}>3</button>
            <button onClick={handleClick} value="+">+</button> 
          </div>
          <div className="Btn Row">
            <button onClick={handleClick} value="+-">+/-</button> 
            <button onClick={(e)=>appendDigit(e,'0')}>0</button>
            <button onClick={point}>.</button>
            <button onClick={equal}>=</button>
          </div>  
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  