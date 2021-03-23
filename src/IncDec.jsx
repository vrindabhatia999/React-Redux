import React, { useState } from 'react';
import './index.css';


const IncDec=()=>{
    const[num , setNum]=useState(0);

    const onChange1=()=>{
        setNum(num+1)
    }

    const onChange2=()=>{
        if(num>0){
            setNum(num-1)
        }else{
            setNum(0);
            alert("Cannort go negative")
        }
       
    }



    return(
        <>
        <div className="play">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="center1">{num}</h1>
            <br />
            <div className="but">
                <button onClick={onChange1}>Inc</button> <br></br>
                <button onClick={onChange2}>Dec</button>
            </div>
          
             
        </div>
        </>
    )

}

export default IncDec;