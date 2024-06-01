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
        else if(event.key==='+')
            plus(event)
        else if(event.key==='-')
            minus(event)
        else if(event.key==='*'||event.key==='x')
            times(event)
        else if(event.key==='/')
            divide(event)
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

    function plus(e) { 
        e.preventDefault();
        setResult(inputRef.current.value+"+");
        inputRef.current.value="" 
    }; 
   
    function minus(e) { 
        e.preventDefault();
        setResult(inputRef.current.value+"-")
        inputRef.current.value="" 
    };
   
    function times(e) { 
      e.preventDefault();
      setResult(inputRef.current.value+"*")
      inputRef.current.value="" 
    }; 
   
    function divide(e) { 
        e.preventDefault();
        setResult(inputRef.current.value+"/")    
        inputRef.current.value="" 
    };

    function modulo(e) { 
        e.preventDefault();
        setResult(inputRef.current.value+"%")    
        inputRef.current.value="" 
    };
   
    function resetAll(e) { 
        e.preventDefault()
        inputRef.current.value=""
        setResult("")
    };
    
    function bckspc(e){
        e.preventDefault()
        inputRef.current.value=inputRef.current.value.slice(0,-1)
    }
    function alternate(e) {
        e.preventDefault()
        inputRef.current.value*=-1
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
            setResult(String(evalResult))
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
            type="text" 
            placeholder="Type a number" 
          /> 
          <div className=" Btn Row">
            <button onClick={resetAll}>C</button>
            <button onClick={modulo}>%</button>   
            <button onClick={divide}>/</button>   
            <button onClick={bckspc}>&#9003;</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'7')}>7</button>
            <button onClick={(e)=>appendDigit(e,'8')}>8</button>
            <button onClick={(e)=>appendDigit(e,'9')}>9</button>
            <button onClick={times}>X</button>
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'4')}>4</button>
            <button onClick={(e)=>appendDigit(e,'5')}>5</button>
            <button onClick={(e)=>appendDigit(e,'6')}>6</button>
            <button onClick={minus}>-</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'1')}>1</button>
            <button onClick={(e)=>appendDigit(e,'2')}>2</button>
            <button onClick={(e)=>appendDigit(e,'3')}>3</button>
            <button onClick={plus}>+</button> 
          </div>
          <div className="Btn Row">
            <button onClick={alternate}>+/-</button> 
            <button onClick={(e)=>appendDigit(e,'0')}>0</button>
            <button onClick={point}>.</button>
            <button onClick={equal}>=</button>
          </div>  
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  