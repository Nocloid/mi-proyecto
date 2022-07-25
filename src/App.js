import React, { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Heroes from "./components/Heroes"
import './App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Heroes/>}/>
      </Routes>
  );
}

export default App;
