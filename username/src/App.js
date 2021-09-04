import logo from './logo.svg';
import './App.css';

import {useState} from "react"

import WelcomePage from "./componentes/WelcomePage"

import GetUserComponent from './componentes/GetUserComponent';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(true)

  const [isList,setIsList]= useState([])

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn?
        <WelcomePage setIsLoggedIn={true} user={"Rafael"}/>
        :
        <GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={isList}/>
        } 
      </header>
    </div>
  );
}

export default App;
