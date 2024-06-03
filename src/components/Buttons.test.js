import resetAll from "./Reset"
import appendDigit from "./AppendDigit"
import point from "./Point"
import equal from "./Equal"
import handleClick from "./Click"
import bckspc from "./Bckspc"

const inputRef={current:{value:''}}
const setResult=jest.fn();
let result='';

test("test reset",()=>{
    // checking reset button
    inputRef.current.value="123"
    setResult.mockClear();
    resetAll(null,inputRef,setResult)
    expect(inputRef.current.value).toBe('');
    expect(setResult).toHaveBeenCalledWith('')
})

test("test append digits",()=>{
    appendDigit(null,'1',inputRef);
    expect(inputRef.current.value).toBe('1')
    appendDigit(null,'2',inputRef);
    appendDigit(null,'3',inputRef);
    expect(inputRef.current.value).toBe('123')
})

test("test point",()=>{
    inputRef.current.value="";
    point(null,inputRef);
    expect(inputRef.current.value).toBe('.')
    point(null,inputRef);
    expect(inputRef.current.value).toBe('.')
})

test('test equal',()=>{
    inputRef.current.value="1+1";
    equal(null,inputRef,setResult,result);
    expect(setResult).toHaveBeenCalledWith(2);
    expect(inputRef.current.value).toBe('');
})

test("test handle click",()=>{
    const e={target:{value:'+'},preventDefault:()=>null};
    inputRef.current.value='1';
    handleClick(e,inputRef);
    expect(inputRef.current.value).toBe('1+');

    e.target.value='-';
    inputRef.current.value='1';
    handleClick(e,inputRef);
    expect(inputRef.current.value).toBe('1-');
    
    e.target.value='x';
    inputRef.current.value='1';
    handleClick(e,inputRef);
    expect(inputRef.current.value).toBe('1*');
    
    e.target.value='/';
    inputRef.current.value='1';
    handleClick(e,inputRef);
    expect(inputRef.current.value).toBe('1/');
    
    e.target.value='%';
    inputRef.current.value='1';
    handleClick(e,inputRef);
    expect(inputRef.current.value).toBe('1%');
})

test("test backspace",()=>{
    inputRef.current.value='123';
    bckspc(null,inputRef);
    expect(inputRef.current.value).toBe('12');
    bckspc(null,inputRef);
    expect(inputRef.current.value).toBe('1');
    bckspc(null,inputRef);
    expect(inputRef.current.value).toBe('');
    bckspc(null,inputRef);
    expect(inputRef.current.value).toBe('');
})