import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Greeting(){
    var date=new Date();
    var currt=date.getHours();
    var greeting="";
    var cssColor={};


    if(currt>1 && currt<12){
        greeting="Good morning";
        cssColor.color="orange";
    }else if(currt>13 && currt<20){
        greeting="Good evening";
        cssColor.color="green";
    }else if(currt>21 && currt<24){
        greeting="Good night";
        cssColor="blue";

    }

    return(
        <>
        <div className="d1">
            <span style={cssColor}><h2>{greeting}</h2></span>
        </div>
        </>
    )
}

export default Greeting;