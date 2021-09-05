import './App.css';

import {useState} from "react"

import WelcomePage from "./componentes/WelcomePage"

import GetUserComponent from './componentes/GetUserComponent';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const [user,setUser] = useState("")
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn? 
        (<WelcomePage setIsLoggedIn={setIsLoggedIn} user={user}/>)
        :
        (<GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>)
        } 
      </header>
    </div>
  );
}

export default App;
