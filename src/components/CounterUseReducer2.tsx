import { ReactNode,} from 'react';
import { useCounter } from '../context/CounterContext';
import { useCounterText } from '../context/CounterContext';

type childrenType = {
    children: (num:number) => ReactNode
}

const CounterUseReducer2 = ({children}:childrenType) => {
    const { count, increment, decrement } = useCounter();
    const { text, handleTextInput } = useCounterText();
  return (
    <>
        <h1>{children(count)}</h1>
        <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
        <input type="text" placeholder='type something...' onChange={handleTextInput} />
        <h2>{text}</h2>
    </>
  )
}

export default CounterUseReducer2