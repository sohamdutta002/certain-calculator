export default function bckspc(e,inputRef){
    e.preventDefault()
    inputRef.current.value=inputRef.current.value.slice(0,-1)
}