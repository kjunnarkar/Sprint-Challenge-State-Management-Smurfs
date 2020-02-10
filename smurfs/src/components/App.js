import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SmurfList from './SmurfList';
import SmurfContext from '../contexts/SmurfContext';

function App() {
  
  const [addSmurf, setAddSmurf] = useState([
      {
          name: '',
          age: '',
          height: '',
          id: Math.random()
      }
    ]
  );

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        setAddSmurf(res.data);
      })

      .catch(err => console.log('Did not get Smurf data', err));

  }, []);
  
  
  return (
      <div className="App">
        <SmurfContext.Provider value={{ addSmurf, setAddSmurf }}>
          <h1>Smurf Village Membership Registration</h1>
        
          <SmurfList />

        </SmurfContext.Provider>
      </div>
    );
  }

export default App;
