import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
const [puppies, setPuppies] = useState(puppyList)
console.log(puppies)
  return (
    <>
      <div>
       <h1>hello world</h1>
        { 
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
      
    </>
  )
}

export default App
