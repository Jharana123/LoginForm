import React from "react";
import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //  const checkValidation=(e) =>{

  //    setColor((current) => !current);
  //    setColor(true)
  //  }
  // handleChange: function (evt) {
  //     this.setState({ value: evt.target.value.substr(0, 100) });
  //   }
  const handleChange = (evt) => {
    console.log(evt.target.value);
    
       setPassword(evt.target.value)
      
  };
  const handleChangePassword = (e) => {
    console.log(e.target.value);
    // val length=evt.target.value.length
   
       setConfirmPassword(e.target.value)
      
  };
   useEffect((e) => {
  if(password.length && confirmPassword.length){
     if(password === confirmPassword ){
         setColor("green")
     }
     else {
     setColor ("red");
     }
  }
  
 
   },[password,confirmPassword])

  
  return (
    <center>
      <div style={{ minHeight: "200px", minWidth: "200px" }} className="App">
        <div style={{ background: color }}>
          <h1>Login Form</h1>
          <label>
            <h2>Password:</h2>
          </label>
          <input type="text" name="pass" onChange={handleChange}></input>
          <br></br>
          <br></br>
          <label>
            <h2>Confirm Password:</h2>
          </label>
          <input
            type="text"
            name="confirm"
            onChange={handleChangePassword}
          ></input>
        </div>
      </div>
    </center>
  );
}

export default App;
