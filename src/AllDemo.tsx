import { useState } from 'react'
import Counter from './components/Counter'
import CounterUseReducer from './components/CounterUseReducer'
import CounterUseReducer2 from './components/CounterUseReducer2'
import Heading from './components/Heading'
import Hooks from './components/Hooks'
import List from './components/List'
import { Section } from './components/Section'
import { CounterProvider } from './context/CounterContext'
import { initialState } from './context/CounterContext'
import '../src/AllDemo.css'

const AllDemo = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <Heading title='Hello Heading' />
      <Section title='Section main heading'> 
        This is my section
      </Section>
      {/* <Counter/> */}

      <h2>Simple Counter Demo</h2>

      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["Coffee", "Tea", "Burger"]} render={(item:string) => <span className='gold'>{item}</span>} />
      <Hooks />

      <h2>Simple Counter Demo with useReducer</h2>

      <CounterUseReducer>
        {(num:number) => <> Current Count with useReducer {num} </>}
      </CounterUseReducer>    

      <h2>Simple Counter Demo with useContext</h2>

      <CounterProvider count={initialState.count} text={initialState.text}>
      <CounterUseReducer2>
        {(num:number) => <> Current Count with useContext {num} </>}
      </CounterUseReducer2>
      </CounterProvider>
    </>
  )
}

export default AllDemo