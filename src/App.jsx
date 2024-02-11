import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList);


  return (
    <>
      <div className='App'>
       
        { 
          puppies.map((puppy) => {
             return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
              </p>;
           })
        }
        { featPupId && <p>{ featPupId }</p> } 
      </div>   
    </>
  );
}

export default App
