import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';


function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  return (
    <>
    <Navbar/>
    <Alert alert={alert}/>
    <div className='container'>
    <InputForm showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
