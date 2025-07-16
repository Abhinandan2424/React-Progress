import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myarr = [1,2,3]

  

  
  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card  username ="Abhi" btntext="Read in detail" newarr = {myarr} />
    </>
  )
}

export default App
