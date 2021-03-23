import React from 'react';
import ReactDom from 'react-dom';

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgSrc}></img>
                <h1 className="title">{props.title}</h1>
            </div>

        </div>
        </>
    )
}

export default Card;