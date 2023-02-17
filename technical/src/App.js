import './App.css';
import Popup from 'reactjs-popup';
import React, { useState } from 'react';


export default function App() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <Popup trigger={<button id="star"></button>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Formulaire de contact </div>
              <div className="content">
                <input type="text" placeholder='Nom' onChange={(e) => setName(e.target.value)} value={name}></input>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    console.log(name + email);
                    setEmail("")
                    setName("")
                    close();
                  }}
                >
                  Envoyer
                </button>
              </div>
            </div>
          )}
        </Popup>
        <button id="empty"></button>
        <button id="empty"></button>
        <button id="cash"></button>
      </header>
    </div>
  );
}


