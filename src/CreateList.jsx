import { useState } from 'react'
import './App.css'
import ListItem from './ListItem';

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
    props.parentCallback([
        {
          "ItemName": "pork",
          "ItemCost": "6.02",
          "ChainName": "Trader Joes",
          "StoreID": 4,
          "StoreAddress": "6225 Riverside Plaza Dr,Riverside, CA 92506",
          "Latitude": "33.9554000000",
          "Longitude": "-117.3893100000"
        },
        {
          "ItemName": "lettuce",
          "ItemCost": "2.43",
          "ChainName": "Ralphs",
          "StoreID": 5,
          "StoreAddress": "6155 Magnolia Ave, Riverside, CA 92506",
          "Latitude": "33.9597100000",
          "Longitude": "-117.3937100000"
        },
        {
          "ItemName": "steak",
          "ItemCost": "6.41",
          "ChainName": "Smart & Final",
          "StoreID": 7,
          "StoreAddress": "3310 Vine St, Riverside, CA 92507",
          "Latitude": "33.9839043000",
          "Longitude": "-117.3654648000"
        }
      ]);
    event.preventDefault();
}

  return (
    <>
    <h1>Add items to grocery list</h1>
      <search>
        <form onSubmit={(e) => addItemToList(e)}>
            <input value={item}
            onChange={e =>setItem(e.target.value)}
            type="text"
            id="name"/>
            <button>Add Item</button>
        </form>
      </search>
        <ul>
            {listItems.length === 0 && "No Items"}
            {listItems.map( item =>{
                let id = crypto.randomUUID();
                console.log(item);
                return(<ListItem key={id} itemName = {item} />)
            })}
        </ul>
        {listItems.length>0 && <button onClick={onPress}>Get Prices</button>}
    </>
  )
}

export default CreateList;