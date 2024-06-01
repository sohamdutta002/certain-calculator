export default function appendDigit(e,digit,inputRef){
    e.preventDefault()
    inputRef.current.value+=digit;    
}