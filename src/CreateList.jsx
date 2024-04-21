import { useState } from 'react'
import './App.css'
import ListItem from './ListItem';
import './w3.css';
import getCheapestStores from './items';
function CreateList(props) {
//   const [count, setCount] = useState(0)
const [item, setItem] = useState("");
const [listItems, setListItems] = useState([]);

function addItemToList(e){
    e.preventDefault();
    setListItems([...listItems, item]);
    console.log(listItems);
    setItem("");
}

function onPress(event){
    props.parentCallback(getCheapestStores(listItems));
    event.preventDefault();
}

  return (
    <>
    <img class="tc-logo"src="/src/assets/logo.png" alt="Tiny Cart"></img>
    <p class="left-align">Add an Item</p>
      <search>
        <form onSubmit={(e) => addItemToList(e)}>
            <input class="tc-green-border w3-round-large tc-white tc-search" value={item} placeholder='Start typing to search'
            onChange={e =>setItem(e.target.value)}
            type="text"
            id="name"/>
        </form>
      </search>
        <ul class="w3-ul w3-hoverable list-font w3-margin-top">
            {listItems.length === 0 && "No Items"}
            {listItems.map( item =>{
                let id = crypto.randomUUID();
                console.log(item);
                return(<ListItem key={id} itemName = {item} />)
            })}
        </ul>
        {listItems.length>0 && <button className="bottom-align tc-green-background" onClick={onPress}>Get Prices</button>}
    </>
  )
}

export default CreateList;