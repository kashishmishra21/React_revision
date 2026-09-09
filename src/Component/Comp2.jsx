import React from 'react'
import Comp3 from './Comp3'

function Comp2(props) {
  console.log(props)
  return (
   <>
    <h1>
      Hello this is Component 2
    </h1>
    <h1>My email is  {props.email} </h1>
        <h1>My email is {props.phone} </h1>
        <h1> ye lo naam {props.name} </h1>
        <h1>he he {props.age} </h1>

    <Comp3 hello= "kya kar rhi ho" />
    </>
  )
}

export default Comp2