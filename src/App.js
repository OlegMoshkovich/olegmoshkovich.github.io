import React from 'react'
import Intro from './Intro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App({changeTheme, darkTheme}) {
  return (
    <Router>
      <Routes>
        <Route path="/on-boarding" element={<Intro/>} />
      </Routes>
    </Router>
  )
}

export default App
