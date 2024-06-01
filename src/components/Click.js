export default function handleClick(e,inputRef){
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
    default:
      break
  }
}