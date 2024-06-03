export default function appendDigit(e,digit,inputRef){
    if(e&&e.preventDefault())e.preventDefault()
    inputRef.current.value+=digit;    
}