import {evaluate} from 'mathjs';
export default function equal(e,inputRef,setResult,result) {
    e.preventDefault()
    try{
        let evalResult;
        if(isNaN(inputRef.current.value.charAt(0))){
            evalResult=evaluate(result+inputRef.current.value)
        }
        else{
            evalResult=evaluate(inputRef.current.value);
        }
        // console.log(String(evalResult))
        setResult(evalResult)
        inputRef.current.value=""
    }
    catch(error){
        inputRef.current.value="ERR"
        setTimeout(()=>{inputRef.current.value=""},800)
    }
}