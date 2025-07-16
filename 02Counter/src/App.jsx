import { useState } from 'react'


function App() {
   const [counter, setCounter] = useState(0)

   const Addvalue = () =>{
      if (counter < 20){
        setCounter(counter + 1)
      }
      console.log(counter);      
   }

   const Removevalue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
   }



  return (
    <>
      <h2>Counter : {counter}</h2>

      <button 
        onClick={Addvalue}>
        Add Value
        </button><br />

      <button
       onClick={Removevalue}>
       Remove value
       </button>
    </>
  )
}

export default App
