import React, { useEffect } from 'react'

function App() {
  function handleclick(){
    const time = setInterval(()=>{
      console.log("timer")
    },1000)
    return (()=>{
      clearInterval(time)
    })
  }
  useEffect(()=>{
    handleclick()
  })
  return (
    <div>
      <h1>Kashish</h1>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default App