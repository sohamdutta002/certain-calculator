export default function point(e,inputRef) {
    if(e&&e.preventDefault())    e.preventDefault()
    if(!inputRef.current.value.includes('.'))
        inputRef.current.value+='.'
}
