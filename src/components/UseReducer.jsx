import React from 'react'
import { useReducer } from 'react'
const reducer= (state, action) => {
if(action.type === "incr"){
    return {count: state.count + 1}
}else if(action.type=="decr"){
    return {count:state.count - 1}
}else if(action.type =="reset"){
    return {count:0}
}
else{
    throw new Error('Unsupported action type')
}
}

const UseReducer = () => {
   const[state, dispatch] =  useReducer(reducer, {count:0})

  const handelClickInc = ()=>{
    dispatch({type:"incr"})
  }

  const handelClickDec = ()=>{
    dispatch({type:"decr"})
  }

  const handelReset = ()=>{
    dispatch({type:"reset"})
  }
  return (
    <>
    {state.count}
    <br/>
    <button onClick={handelClickInc }>+</button>
    <button onClick={handelReset}>0</button>
    <button onClick={handelClickDec }>-</button>
    </>
  )
}

export default UseReducer