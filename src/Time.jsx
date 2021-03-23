import React, { useState } from 'react'

const Time=()=>{
    let newt=new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(newt);
    
    const upTime=()=>{
        newt=new Date().toLocaleTimeString();
        setCtime(newt);
    }

    return(
        <>
        <div>
            <h2>{ctime}</h2>
            <button onClick={upTime}>Click me</button>
        </div>
        </>
    )
}

export default Time;