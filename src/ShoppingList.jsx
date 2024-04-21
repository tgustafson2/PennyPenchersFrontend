import { useState } from 'react'
import './App.css'
import GroceryItem from './GroceryItem.jsx'

function ShoppingList(props) {
    const [listItems, setListItems] = useState(props.groceries);
    

  return (
    <>
        <img class="tc-logo"src="/src/assets/logo.png" alt="Tiny Cart"></img>
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
