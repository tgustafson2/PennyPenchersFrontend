import { useState } from 'react'
import './App.css'

function GroceryItem(props) {
//   const [count, setCount] = useState(0)
const [item, setItem] = useState(props.item);
const [inCart, setInCart] = useState(false);

  return (
    <>
        
      <p>{item.ItemName}</p>
      <p>{item.ItemCost}</p>
      <p>{item.ChainName}</p>
        {inCart && <span>&#10003;</span>}
        {!inCart && <input type='radio' onClick={() =>setInCart(true)}></input>}
    </>
  )
}

export default GroceryItem