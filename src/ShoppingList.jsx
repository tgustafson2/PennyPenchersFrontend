import { useState } from 'react'
import './App.css'
import GroceryItem from './GroceryItem.jsx'

function ShoppingList(props) {
    const [listItems, setListItems] = useState(props.groceries);
    

  return (
    <>
        <h1 class="list-font tc-green-text">Tiny Cart</h1>
        <p class="left-align tc-no-bottom-margin">Price Check</p>
        <ul class="w3-ul w3-hoverable list-font tc-ul">
        {listItems.map( item =>{
                let id = crypto.randomUUID();
                console.log(item);
                return(<GroceryItem key={id} item = {item} />)
            })}
        </ul>
    
    </>
  )
}

export default ShoppingList
