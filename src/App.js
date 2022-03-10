// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
  
// } from "react-router-dom";


function App() {
  const [mode, setmode]=useState('light'); 
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title='TextUtils-Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title='TextUtils-Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" Abouttext="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={ toggleMode}/>
    <Alert alert={alert}/> 
    
  <div className="container my-3">
  {/* <Switch> */}
          {/* <Route path="/about">
            <About />
            
          </Route> */}
          
          {/* <Route path="/"> */}
           
            <TextForm heading="Enter the text to anlyze" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
  {/* </Switch> */}
    
    
    </div>
    {/* </Router> */}
  </>
  );
}

export default App;
