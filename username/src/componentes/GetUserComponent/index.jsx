import "./style.css"

import {useState} from "react"

function GetUserComponent({ setUser, setIsLoggedIn}){

    const [userInput, setUserInput]=useState([])

    function HandleLogin(userInput){
        setUser(userInput)
        setIsLoggedIn(true)
    }

    return (
        <form>
            <p>Nome: {userInput}</p>
            <input type="text" 
            value = {userInput} 
            onChange={(event) => setUserInput(event.target.value)}
            placeholder={"Insira seu nome"}></input>
            <button onClick={()=>HandleLogin(userInput)}>Acessar com o nome</button>
        </form>
    )
    
}

export default GetUserComponent