export default function point(e,inputRef) {
    e.preventDefault()
    if(!inputRef.current.value.includes('.'))
        inputRef.current.value+='.'
}
