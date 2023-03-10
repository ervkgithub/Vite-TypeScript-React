import { Children, ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode
}

// const Counter = () => {
//     const [count, setCount] = useState<number>(0);
//   return (
//     <>
//         <h1>Count is {count}</h1>
//         <button onClick={ ()=> setCount(prev => prev + 1)}>+</button>
//         <button onClick={ ()=> setCount(prev => prev - 1)}>-</button>
//     </>
//   )
// }

const Counter = ({setCount, children}:CounterProps) => {
    
  return (
    <>
        <h1>Count is {children}</h1>
        <button onClick={ ()=> setCount(prev => prev + 1)}>+</button>
        <button onClick={ ()=> setCount(prev => prev - 1)}>-</button>
    </>
  )
}

export default Counter