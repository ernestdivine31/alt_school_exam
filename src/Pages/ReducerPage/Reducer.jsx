 
import React from 'react'
import { useReducer,useRef } from 'react'
import { counterReducer, initialState } from '../../util/ReducerPage'


const Reducer = () => {
  const [state,dispatch] = useReducer(counterReducer,initialState)
  const inputRef=useRef('')
 const incrementHandler=()=>{
    dispatch({
        type:'INCREMENT'
    })
}
const decrementHandler=()=>{
    dispatch({
        type:'DECREMENT'
    })
    
}
const setValueHandler=(value)=>{
    dispatch({
        type:'SETVALUE',
        value
    })
    
    
}
const resetHandler=()=>{
    dispatch({
        type:'RESET'
    })
    
}
const formHandler=(e)=>{
  e.preventDefault()
  setValueHandler(+inputRef.current.value)
  inputRef.current.value= ''
    
    
} 
  return (
  
     <section className='flex'>
      <h2>Implemented Counter App with useReducer</h2>
        <h1>{ state.counter}</h1>
        <article>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrease</button>
        <button onClick={resetHandler}>Reset</button>
        </article>
       <form onSubmit={formHandler}>
        <input type="number"  placeholder='Enter Counter Value' min={0}  ref={inputRef}/>
        <button  type="submit">Set_Value</button>
    </form>
    </section> 
    
  )
}

export default Reducer 