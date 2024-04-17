import React from 'react'
import './App.css';
import Onboarding from './Onboarding'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App({changeTheme, darkTheme}) {
  return (
    <Router>
      <Routes>
        <Route path="/on-boarding" element={<Onboarding/>} />
      </Routes>
    </Router>
  )
}

export default App
