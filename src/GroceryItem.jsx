import { useState } from 'react'
import './App.css'

function GroceryItem(props) {
//   const [count, setCount] = useState(0)
const [item, setItem] = useState(props.item);
const [inCart, setInCart] = useState(false);

let color;
switch(item.ChainName) {
  case 'Ralphs': color="tc-red-text"; break;
  case 'Trader Joes': color="tc-yellow-text"; break;
  case 'Vons': color="tc-blue-text"; break;
  default: color="tc-green-text";
}


  return (
    <>
      <li class="tc-grid-container">
        <div class={"left-align "+color}>{item.ItemName}</div>
        <div class="w3-small right-text">${item.ItemCost} @</div>
        <div class="w3-small left-align">{item.ChainName}</div>
      </li>
    </>
  )
}

export default GroceryItem