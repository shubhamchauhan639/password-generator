import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [useCharacter , setChar] = useState(false)
const [password , setPassword ] = useState ("")
const passwordGenerator = useCallback(()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str+= "0123456789"
  if(useCharacter) str+= "!@#$%^&*()"
for (let i = 1; i < length; i++) {
 let char = Math.floor(Math.random() * str.length + 1)
 pass = str.charAt(char)
}
},[length,numberAllowed,useCharacter,setPassword])
  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
  <h1 className="text-white text-center my-3">Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
    <input 
      type="text" 
      value={password} 
      className="outline-none w-full py-1 px-3 placeholder-black" 
      placeholder="Password" 
      readOnly 
    />
    <button className='outline-none bg-green-500 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>
  <div className='flex-text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={50}
      value={length}  
      className='w-40
            h-2
            bg-gray-300 
            rounded-lg  
            cursor-pointer
            accent-green-500'  
      
      onChange={(e)=>{setlength(e.target.value)}}  />
      <label> Length : {length}</label>
    </div>
    <div className='flex item-center gap-x-l text-white'>
      <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setnumberAllowed((prev)=>!prev);}}/>
      <label htmlFor="numberInput"> Number</label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
