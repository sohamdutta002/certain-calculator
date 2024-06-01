import { useEffect } from "react";
import handleClick from "./Click"
import appendDigit from "./AppendDigit"
import point from "./Point"
import bckspc from "./Bckspc"
import resetAll from "./Reset"
import equal from "./Equal"


export default function Keyboard({inputRef,setResult,result}){
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Enter')
                equal(event,inputRef,setResult,result);
            else if(event.key>='0'&&event.key<='9')
                appendDigit(event,event.key,inputRef);
            else if(event.key==='+'){
              event.target.value="+"
              handleClick(event,inputRef)
            }
            else if(event.key==='-'){
              event.target.value="-"
              handleClick(event,inputRef)
            }
            else if(event.key==='*'||event.key==='x'){
              event.target.value="x"
              handleClick(event,inputRef)
            }
            else if(event.key==='/'){
              event.target.value="/"
              handleClick(event,inputRef)
            }
            else if(event.key==='%'){
              event.target.value="%"
              handleClick(event,inputRef)
            }
            else if(event.key==='.')
                point(event,inputRef)
            else if(event.key==='Backspace')
                bckspc(event,inputRef)
            else if(event.key==='Delete')
              resetAll(event,inputRef,setResult)
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [inputRef,setResult,result]);
}
