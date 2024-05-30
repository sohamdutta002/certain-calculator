import {
    useState,
    useRef
  } from "react"; 
  import "./App.css";
  
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }; 
   
    function minus(e) { 
        // Add the code for the minus function 
      e.preventDefault();
      setResult((result)=>result-Number(inputRef.current.value))
    };
   
    function times(e) { 
      // Add the code for the plus function
      e.preventDefault();
      setResult((result)=>result*Number(inputRef.current.value))
    }; 
   
    function divide(e) { 
      // Add the code for the divide function 
      e.preventDefault();
      let x=Number(inputRef.current.value)
      setResult((result)=>(x==0)?0:result/x)
    };
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      e.preventDefault()
      inputRef.current.value=0
    }; 
   
    function resetResult(e) { 
        // Add the code for the resetResult function 
      e.preventDefault()
      setResult(0)
    };
    
    
    function one(e) {
      e.preventDefault()
      inputRef.current.value+=1
    }
    
    function two(e) {
      e.preventDefault()
      inputRef.current.value+=2
    }
    
    function three(e) {
      e.preventDefault()
      inputRef.current.value+=3
    }
    
    function four(e) {
      e.preventDefault()
      inputRef.current.value+=4
    }
    
    function five(e) {
      e.preventDefault()
      inputRef.current.value+=9
    }
    
    function six(e) {
      e.preventDefault()
      inputRef.current.value+=9
    }
  
    function seven(e) {
      e.preventDefault()
      inputRef.current.value+=9
    }
  
    function eight(e) {
      e.preventDefault()
      inputRef.current.value+=9
    }
  
    function nine(e) {
      e.preventDefault()
      inputRef.current.value+=9
    }
  
    function zero(e) {
      e.preventDefault()
      inputRef.current.value+=0
    }
    function alternate(e) {
      e.preventDefault()
      inputRef.current.value*=-1
    //   if(Number(inputRef.current.value)>0)
    //     inputRef.current.value*=-1
    //   else
    
    }
    function point(e) {
      e.preventDefault()
      inputRef.current.value+="."
    }
    function equal(e) {
      e.preventDefault()
      inputRef.current.value+="."
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
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <div className=" Btn Row">
            <button onClick={resetInput}>CE</button> 
            <button onClick={resetResult}>del</button>
            <button onClick={divide}>%</button>   
            <button onClick={divide}>/</button>   
          </div>
          <div className="Btn Row">
            <button onClick={seven}>7</button>
            <button onClick={eight}>8</button>
            <button onClick={nine}>9</button>
            <button onClick={times}>*</button>
            <button onClick={four}>4</button>
            <button onClick={five}>5</button>
            <button onClick={six}>6</button>
            <button onClick={minus}>-</button> 
            <button onClick={one}>1</button>
            <button onClick={two}>2</button>
            <button onClick={three}>3</button>
            <button onClick={plus}>+</button> 
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
  