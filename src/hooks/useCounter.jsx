import { useReducer } from 'react'
import { counterReducer,initialState } from '../util/ReducerPage'

const useCounter = () => {
    const [state,dispatch]=useReducer(counterReducer,initialState)
    const{counter}= state
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
  return {counter,incrementHandler,decrementHandler,setValueHandler,resetHandler}
}

export default useCounter