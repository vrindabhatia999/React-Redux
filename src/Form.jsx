import React, { useState } from 'react';

const Form=()=>{
   const [fullName,setFullName]=useState({
       fname:"",
       lname:"",
   })

     

     const inputEvent=(event)=>{
         console.log(event.target.value)
         const value=event.target.value;
         const name=event.target.name;


         setFullName((prevalue)=>{
             if(name==="fname"){
                 return{
                     fname: value,
                     lname:prevalue.lname,
                 }
             }else if(name==="lname"){
                 return{
                     fname:prevalue.fname,
                     lname:value,
                 }
             }
         })

     }
     const onSubmit=(event)=>{
         event.preventDefault();
         alert("submotted")
     }

     const inputEvent2=(event)=>{
        //  setL(event.target.value);
     }

    return(
        <>
       <h3>Hello, {fullName.fname}{fullName.lname}</h3>
       <form onSubmit={onSubmit}> 
        <input 
        type="text"
        placeholder="enter name"
        name="fname"
        onChange={inputEvent} 
        value={fullName.fname}/>
        <br></br>
        <input 
        type="text"
        name="lname"
        onChange={inputEvent}
        value={fullName.lname}
        />
        
        <button type="submit">Click me</button>
        </form>
        </>
    )
}

export default Form;