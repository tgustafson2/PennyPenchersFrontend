import { useState } from 'react'
import './App.css'
import GroceryItem from './GroceryItem.jsx'

function ShoppingList(props) {
    const [listItems, setListItems] = useState(props.groceries);
    

  return (
    <>
        
        {listItems.map( item =>{
                let id = crypto.randomUUID();
                console.log(item);
                return(<GroceryItem key={id} item = {item} />)
            })}
    
    </>
  )
}

export default ShoppingList
