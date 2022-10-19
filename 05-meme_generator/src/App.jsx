import { useState } from 'react'
import './App.css'

// loading components
import Navbar from './components/Navbar';
import AppBody from './components/AppBody';

function App() {

  return (
    <div className="App">
      <Navbar />
      <main className="meme-gen-container">
        <AppBody />
      </main>
    </div>
  )
}

export default App
