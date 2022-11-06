import React from 'react'
import ErrorBoundary from '../../Components/Error'
import Counter from '../Counter/Counter'
import Reducer from '../ReducerPage/Reducer'

const Boundary = () => {
  return (
    <ErrorBoundary>
        <Counter/>
        <Reducer/>
    </ErrorBoundary>
    
  )
}

export default Boundary