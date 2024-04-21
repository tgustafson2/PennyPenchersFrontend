import { useState } from 'react'
import './App.css'

function GroceryItem(props) {
//   const [count, setCount] = useState(0)
const [item, setItem] = useState(props.item);
const [inCart, setInCart] = useState(false);

  return (
    <>
      <li>
        <div class="inline-block left-align">{item.ItemName}</div>
        <div class="right-align w3-small">{item.ChainName}</div>
        <div class="right-align w3-small">${item.ItemCost} @</div>
      </li>
    </>
  )
}

export default GroceryItem