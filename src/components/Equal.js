import {evaluate} from 'mathjs';
export default function equal(e,inputRef,setResult) {
    e.preventDefault()
    try{
        const evalResult=evaluate(inputRef.current.value);
        // console.log(String(evalResult))
        setResult(evalResult)
        inputRef.current.value=""
    }
    catch(error){
        alert("Invalid Calculation")
    }
}