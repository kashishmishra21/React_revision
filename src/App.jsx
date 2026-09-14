import React, { useState } from 'react'

function App() {
  const[color,setColor]=useState("yellow")
  const [toggle,settoggle] = useState(true)
  const[fontc,setFontc]=useState("white")
  function setToggle(){
    if (toggle){
      setColor("black")
      settoggle(false)
      setFontc("white")

    }
    else{
      setColor("white")
      settoggle(true)
      setFontc("black")
    }
  }
  return (
    <div style={{width:"300px", height:"200px",border:"2px solid",backgroundColor:color,color:fontc}}>
      <button onClick={setToggle}> Toggle change</button>
      <h1>hello Kashish</h1>
       <h1>hello Kashish</h1>
        <h1>hello Kashish</h1>
      <button onClick={()=>setColor("Red")}>Red</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("yellow")}>yellow</button>
      <button onClick={()=>setColor("blue")}>Blue</button>


    </div>
  )
}

export default App