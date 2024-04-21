import { useState } from 'react'
import './App.css'
import './ShoppingList';
import './CreateList';
import CreateList from './CreateList';
import ShoppingList from './ShoppingList';

function App() {
  const [listExists, setListExists] = useState(false);
  const [groceryList, setGroceryList] = useState();

  function getList(groceryListArr){
    setListExists(true);
    setGroceryList(groceryListArr);
  }

  return (
    <>
      <div class="bottom-container">
        {!listExists && <CreateList parentCallback = {getList}/>}
        {listExists && <ShoppingList groceries={groceryList} />}
      </div>
    
    </>
  )
}

export default App
