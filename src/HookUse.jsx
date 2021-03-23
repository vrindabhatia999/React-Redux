import React, { useState } from 'react';


const HookUse=()=>{

const state=useState();

const [count, setCount]=useState(0); //theb value 0 is set for count

const Inc=()=>{
    setCount(count+1);
};

return(
    <div>
        <h1>{count}</h1>
        <button onClick={Inc}>Click me</button>
    </div>
)
 
}

export default HookUse;