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
        if (event.key === 'Enter') {
            equal(event);
        }
        else if(event.key==='1')
            one(event);
        else if(event.key==='2')
            two(event)
        else if(event.key==='3')
            three(event)
        else if(event.key==='4')
            four(event)
        else if(event.key==='5')
            five(event)
        else if(event.key==='6')
            six(event)
        else if(event.key==='7')
            seven(event)
        else if(event.key==='8')
            eight(event)
        else if(event.key==='9')
            nine(event)
        else if(event.key==='0')
            zero(event)
        else if(event.key==='+')
            plus(event)
        else if(event.key==='-')
            minus(event)
        else if(event.key==='*'||event.key==='x')
            times(event)
        else if(event.key==='/')
            divide(event)
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    function plus(e) { 
      e.preventDefault(); 
      if(result===0)
        resultRef.current.value="";
      else  
        setResult((result) => result +"+"+ Number(inputRef.current.value));
      inputRef.current.value="" 
    }; 
   
    function minus(e) { 
        // Add the code for the minus function 
      e.preventDefault();
      setResult((result)=>result+"-"+Number(inputRef.current.value))
      inputRef.current.value="" 
    };
   
    function times(e) { 
      // Add the code for the plus function
      e.preventDefault();
      setResult((result)=>result+"*"+Number(inputRef.current.value))
      inputRef.current.value="" 
    }; 
   
    function divide(e) { 
      // Add the code for the divide function 
      e.preventDefault();
      if(inputRef.current.value===0)
        inputRef.current.value="Cannot divide by zero"
      else
        setResult((result)=>result+"/"+Number(inputRef.current.value))
      inputRef.current.value="" 
    };
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      e.preventDefault()
      inputRef.current.value=""
    }; 
   
    function resetAll(e) { 
        // Add the code for the resetResult function 
      e.preventDefault()
      inputRef.current.value=""
      setResult("")
    };
    
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
            const evalResult=evaluate(result+inputRef.current.value);
            setResult(evalResult)
            inputRef.current.value=""
        }
        catch(error){
            alert("Invalid Calculation")
        }
    }
    
    function one(e) {e.preventDefault();inputRef.current.value+=1}
    function two(e) {e.preventDefault();inputRef.current.value+=2}
    function three(e) {e.preventDefault();inputRef.current.value+=3}
    function four(e) {e.preventDefault();inputRef.current.value+=4}
    function five(e) {e.preventDefault();inputRef.current.value+=5}
    function six(e) {e.preventDefault();inputRef.current.value+=6}
    function seven(e) {e.preventDefault();inputRef.current.value+=7}
    function eight(e) {e.preventDefault();inputRef.current.value+=8}
    function nine(e) {e.preventDefault();inputRef.current.value+=9}
    function zero(e) {e.preventDefault();inputRef.current.value+=0}
       
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
            <button onClick={resetInput}>CE</button> 
            <button onClick={resetAll}>C</button>
            <button onClick={divide}>%</button>   
            <button onClick={divide}>/</button>   
          </div>
          <div className=" Btn Row">
            <button onClick={seven}>7</button>
            <button onClick={eight}>8</button>
            <button onClick={nine}>9</button>
            <button onClick={times}>X</button>
          </div>
          <div className=" Btn Row">
            <button onClick={four}>4</button>
            <button onClick={five}>5</button>
            <button onClick={six}>6</button>
            <button onClick={minus}>-</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={one}>1</button>
            <button onClick={two}>2</button>
            <button onClick={three}>3</button>
            <button onClick={plus}>+</button> 
          </div>
          <div className="Btn Row">
            <button onClick={alternate}>+/-</button> 
            <button onClick={zero}>0</button>
            <button onClick={point}>.</button>
            <button onClick={equal}>=</button>
          </div>  
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  