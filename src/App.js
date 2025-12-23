// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('#2e3134ff'); // default dark color


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor=themeColor;
      showAlert("Dark mode has been enable","success");
      document.title='TextUtils-Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amzing Mode';
      // },2000);

      //  setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
      document.title='TextUtils-Light Mode';

    }
  }

  const changeThemeColor = (color) => {
    setThemeColor(color);
    setMode('dark');
    document.body.style.backgroundColor = color;
    showAlert("Theme color applied", "success");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeThemeColor={changeThemeColor} themeColor={themeColor}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm  showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} themeColor={themeColor}/>}/>
            <Route path="/about" element={<About mode={mode}
              themeColor={themeColor}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
        

    

          
    
    </>
  );
}

export default App;
