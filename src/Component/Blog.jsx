import React from 'react'

function Blog(props) {
  return (
    <>

   <div style={{width:"500px",heigth:"100", border:"2px solid red", backgroundColor:props.bgColor  }}>
     <h2> Here is the title :=  {props.Title}</h2>
    <h2> Here is the Author :-   {props.Author}</h2>
    <h2>Here is the Description :-  {props.Desc}</h2>

   </div>

    
    
    </>
  )
}

export default Blog