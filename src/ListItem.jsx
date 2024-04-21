import { useState } from 'react'
import './App.css'

function ListItem(props) {
//   const [count, setCount] = useState(0)
const [name, setName] = useState(props.itemName);

  return (
    <>
        
      <li class="left-align">{name}<input class="w3-round-large right-align small-input tc-green-border tc-neutral" placeholder='1' type="number" min="1" max="10"></input></li>
    
    </>
  )
}

export default ListItem