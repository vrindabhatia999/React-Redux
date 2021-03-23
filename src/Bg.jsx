import React, { useState } from 'react';

const Bg=()=>
{
    const color="purple";
    const nam="click me"
    const [bg,setBg]=useState(color);
    const [name,setName]=useState(nam);

    const bgChange=()=>{
        let newBg="blue";
        let newName="Wowww!!!"
        setBg(newBg);
        setName(newName);

    }

    return(
        <>
        <div style={{backgroundColor: bg}}>
            <button onClick={bgChange}>{name}</button>
            
        </div>
        </>
    )
}

export default Bg;