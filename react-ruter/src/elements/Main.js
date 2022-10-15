import React from "react";
import Navbar from "./Navbar";
import Data from "../Data";
import Maintile from "./tiles/main-tile"
export default function Main(){
    let tiles = Data.map((tile,index)=>{
    return(<Maintile id={index} title={tile.title} desc={tile.desc}/>)})
    return(
        <div className="main-main">
            <div>
                <Navbar/>
                <h1 className="main-text">main page</h1>
            </div>
            

            <div className="tiles">{tiles}</div>
        </div>
    )
}