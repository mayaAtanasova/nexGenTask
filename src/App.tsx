import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import './App.css';
import bkg from './assets/coworking-bkg.png'
import { useEffect, useState } from 'react';

function App() {

  const [postMessage, setPostMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = (message:string) => {
    setPostMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setPostMessage('');
      setShowMessage(false);
    }, 3000);
  }

  return (
    <div className="wrapper">

      {showMessage && <div className="message">
        {postMessage}
      </div>}

      <div className="aside">
        <img src={bkg} alt="" />
        <h1>Register to</h1>
        <h1>FIND</h1>
        <h1>a <span>COWorking</span></h1>
        <h1>Match</h1>
      </div>

      <div className="form-wrapper">
        <RegistrationForm onMsgReceived={displayMessage}/>
      </div>

    </div>
  );
}

export default App;
