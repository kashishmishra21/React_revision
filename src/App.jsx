import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Comp1 from './Component/Comp1'
import Blog from './Component/Blog'

function App() {
const title = "React native language"
const description = "React is a SPA UI Library"
const author = "xyz"

  return (
   <>
    {/* <h1>Hello React</h1> */}
      {/* <Comp1 name="kashish"  age='32' /> */}
    <Blog Title={title} Desc ={description} Author = {author}   bgColor="pink" >
      <h3>this is a children crop</h3>
      </Blog>
    <Blog Title= "Next js" Desc = "Next js is a library of js" Author = "abc"     bgColor="green">
            <h3>this is a children crop</h3>
    </Blog>
    <Blog Title="javascript" Desc =  "javascript is a programing language" Author = "123"   bgColor="orange"  >
            <h3>this is a children crop</h3>
      </Blog>
   </>
  )
}