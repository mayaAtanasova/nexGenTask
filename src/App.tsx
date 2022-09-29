import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import './App.css';
import bkg from './assets/coworking-bkg.png'
import { useEffect } from 'react';

const binURL = process.env.REACT_APP_BIN_URL;

function App() {

useEffect (() => {
  console.log(binURL);
}, [])

  return (
    <div className="wrapper">

      <div className="aside">
        <img src={bkg} alt="" />
        <h1>Register to</h1>
        <h1>FIND</h1>
        <h1>a <span>COWorking</span></h1>
        <h1>Match</h1>
      </div>

      <div className="form-wrapper">
        <RegistrationForm />
      </div>

    </div>
  );
}

export default App;
