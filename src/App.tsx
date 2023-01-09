import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
