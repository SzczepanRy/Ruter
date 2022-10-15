import React from "react";

export default function Maintile(props){
    return(
        <div className="tile">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}