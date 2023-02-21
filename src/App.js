import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not\

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing.';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils.';
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText = "About " mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={
              <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              }>
            </Route>
            <Route exact path='/about' element={
              <About/>
              }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
