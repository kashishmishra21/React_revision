import React from 'react'
import Comp2 from './Comp2'
function Comp1(props) {
  console.log(props)
  return (
    <>
    <h1>
      Hello this is Component 1
    </h1>
    <h1>My name is {props.name} </h1>
     <h1>My age is {props.age} </h1>
    <Comp2 email="xyz@gmail.com" phone = "4754145" name = {props.name} age = {props.age} />
    </>
  )
}

export default  Comp1