import React from "react"
import resetAll from "./Reset"
import appendDigit from "./AppendDigit"
import point from "./Point"
import equal from "./Equal"
import handleClick from "./Click"
import bckspc from "./Bckspc"


export default function Buttons({inputRef,setResult,result}){
    return(
        <div>
            <div className=" Btn Row">
            <button onClick={(e)=>resetAll(e,inputRef,setResult)}>C</button>
            <button onClick={(e)=>handleClick(e,inputRef)} value="%">%</button>   
            <button onClick={(e)=>handleClick(e,inputRef)} value="/">/</button>   
            <button onClick={(e)=>bckspc(e,inputRef)}>&#9003;</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'7',inputRef)}>7</button>
            <button onClick={(e)=>appendDigit(e,'8',inputRef)}>8</button>
            <button onClick={(e)=>appendDigit(e,'9',inputRef)}>9</button>
            <button onClick={(e)=>handleClick(e,inputRef)} value="x">X</button>
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'4',inputRef)}>4</button>
            <button onClick={(e)=>appendDigit(e,'5',inputRef)}>5</button>
            <button onClick={(e)=>appendDigit(e,'6',inputRef)}>6</button>
            <button onClick={(e)=>handleClick(e,inputRef)} value="-">-</button> 
          </div>
          <div className=" Btn Row">
            <button onClick={(e)=>appendDigit(e,'1',inputRef)}>1</button>
            <button onClick={(e)=>appendDigit(e,'2',inputRef)}>2</button>
            <button onClick={(e)=>appendDigit(e,'3',inputRef)}>3</button>
            <button onClick={(e)=>handleClick(e,inputRef)} value="+">+</button> 
          </div>
          <div className="Btn Row">
            <button onClick={(e)=>handleClick(e,inputRef)} value="+-">+/-</button> 
            <button onClick={(e)=>appendDigit(e,'0',inputRef)}>0</button>
            <button onClick={(e)=>point(e,inputRef)}>.</button>
            <button onClick={(e)=>equal(e,inputRef,setResult,result)}>=</button>
          </div>
        </div>
    )
}