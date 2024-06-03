export default function bckspc(e,inputRef){
    if(e&&e.preventDefault())   e.preventDefault()
    inputRef.current.value=inputRef.current.value.slice(0,-1)
}