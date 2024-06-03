export default function resetAll(e,inputRef,setResult) { 
    if(e&&e.preventDefault)    e.preventDefault()
    inputRef.current.value=""
    setResult("")
};