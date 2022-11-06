
import { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

const Counter = () => {
    const[value,setValue]= useState('')
    const{counter,decrementHandler,incrementHandler,setValueHandler,resetHandler}= useCounter()
  
    const formHandler=(e)=>{
      e.preventDefault()
        setValueHandler(+value)
        setValue('')
    }
  

  return (
    <section className='flex'>
      <h2>Implemented Counter App with Custom Hooks</h2>
        <h1>{counter}</h1>
        <article>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrease</button>
        <button onClick={resetHandler}>Reset</button>
        </article>
       <form onSubmit={formHandler}>
        <input type="number"  placeholder='Enter Counter Value' min={0} value={value} onChange={(event)=>setValue(event.target.value)}/>
        <button  type="submit">Set_Value</button>
    </form>
    </section>
  )
}

export default Counter