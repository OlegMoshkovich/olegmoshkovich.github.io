import React from 'react'
import Intro from './Intro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App({changeTheme, darkTheme}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro/>} />
      </Routes>
    </Router>
  )
}

export default App
