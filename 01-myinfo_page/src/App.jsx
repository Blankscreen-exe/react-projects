import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
};


