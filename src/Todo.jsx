import React, { useState } from 'react';

const Todo=()=>{
const [inputList,setList]=useState("buy apple");
const[items,setItems]=useState([]);  //to store in array

const inputEvent=(event)=>{
    setList(event.target.value)
   


}

const listOfItems=()=>{
    setItems((oldItems)=>{
        return (
            
            [...oldItems,inputList]
            
             )//old+new items
        
    })
    



}



    return(
        <>
        <div className="main">
            <div className="center">
                <br />
                <h1>To Do</h1>
                <br />
                <input    
                 type="text" placeholder="add items" onChange={inputEvent}  />
                <button onClick={listOfItems} value="">+</button>
                <ul>
                  {items.map((itemval)=>{ //iterates over item array and returns each element(itemval)
                        return (
                            <li>{itemval}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Todo;