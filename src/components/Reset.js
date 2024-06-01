export default function resetAll(e,inputRef,setResult) { 
    e.preventDefault()
    inputRef.current.value=""
    setResult("")
};