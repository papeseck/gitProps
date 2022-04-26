import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Component } from "react";
import Profile from "./Profil/profile";
function App() {
  const styleObjet ={ 
    
  }
  
  return (
    <div className="App">
      <div>
        <Profile bio="Bio: je suis developpeur" />
      </div>

      <div style={styleObjet}>
        <Profile>
          {" "}
          <img src={logo}  style={{ maxWidth:"150px" ,alignSelf:"center"} }/>
        </Profile>
      </div>
    </div>
  );
  
 
  }
  

  



export default App;
