import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import File from './Form';

const initialFileValues = {
  username: '',
  email: '',
  role: '',
}

const [files, setFiles] = useState([])

const [fileValues, setFileValues] = useState(initialFileValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const submitForm = () => {
  const newFriend = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }

  if(!newFriend.username || !newFriend || !newFriend.role) return
  console.log(newFriend);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
