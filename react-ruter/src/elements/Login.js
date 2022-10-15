import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login(){
    let navigate = useNavigate();

    async function submit(event){
        event.preventDefault()
        const login = event.target[0].value
        const password = event.target[0].value
        if(login){
            navigate("/main")
        }else{

        }
    }
    return(
        // <Link to="/main">Main</Link> 
        
        <div>
            <form className="form-main" onSubmit={submit}>
            <input className="input-form" type="text" placeholder="login"></input>
            <input className="input-form" type="text" placeholder="password"></input>
            <button className="form-button" type="submit">submit</button>
            </form>

            
        </div>
    )
}