import React from "react";
import { Link , useNavigate } from "react-router-dom";
import arrow from "./arrow.png"
export default function Navbar(){
    let navigate = useNavigate()
    async function back(){
        navigate("/")
    }
    return(
        
        <div className="main-div-nav">
            <img src={arrow} onClick={back}></img>
            <div className="second-div">
                <nav className="nav"> <b>nav element</b></nav>
                <ul className="nav-list">
                    <li><Link className="a" to="/about">about</Link> </li>
                    <li><Link className="a" to="/main">home</Link> </li>
                    <li><Link className="a" to="/read">read</Link> </li>
                </ul>
            </div>
        </div>
            
       
    )
}