import { useState, useEffect, useCallback, useMemo, MouseEvent, KeyboardEvent, useRef } from "react";

interface User{
    id:number,
    username:string
}

type fibFunc = (n:number) => number
const fib:fibFunc = (n) =>{
    if(n < 2) return n
    return fib(n - 1) + fib (n - 2)
}

const myNum : number | [] = 37

const Hooks = () => {

    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(()=>{
        console.log('Mounting');
        console.log('User', users);
        return () => console.log('Unmounting');
    },[users])

    // Callback memorize function activity

    const addTwo = useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent) : void => setCount(prev => prev + 1), [])
    const result = useMemo<number>(() => fib(myNum), [myNum]);

    const inputRef = useRef<HTMLInputElement>(null)
    const inputRef1 = useRef<HTMLInputElement>(null!)
    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

  return (
    <>
    <div>Count is {count}</div>
    <button onClick={()=> setCount(prev => prev + 1)}>Add</button>
    <button onClick={addTwo}>Add</button>
    <p>{result}</p>
    <input type="text" ref={inputRef} />
    </>
  )
}

export default Hooks