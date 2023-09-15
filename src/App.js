
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';






function App() {
  const [mode, setMode]=useState('light');

  const setmode=()=>{

    let switchElement=document.getElementById('flexSwitchCheckDefault');
    switchElement.addEventListener("change", function () {
      if (switchElement.checked) {
        console.log("The switch is now ON");
        setMode('dark');
        document.body.style.backgroundColor='#6610f2';
      }
       else {
        console.log("The switch is now OFF");
        setMode('white');
        document.body.style.backgroundColor='white';
      }
    });}

    
  return (
    <>
    <Navbar title="Textutils" aboutText="About" mode={mode} setmode={setmode}/>
    <div className='container my-3'>
    <TextForm heading="Enter text here"  />
    </div>   
    </>     
  );
}

export default App;
