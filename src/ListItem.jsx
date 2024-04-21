import { useState } from 'react'
import './App.css'

function ListItem(props) {
//   const [count, setCount] = useState(0)
const [name, setName] = useState(props.itemName);

  return (
    <>
        
      <li>{name}</li>
    
    </>
  )
}

export default ListItem