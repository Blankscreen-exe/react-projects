import { useState } from 'react'
import './App.css'
import './buttonstyle.scss'
import './aboutmeshine.css'

import Imageframe from './components/Imageframe'
import Tagline from './components/Tagline'
import Aboutme from './components/Aboutme'
import Services from './components/Services'
import Sociallinks from './components/Sociallinks'
import Buttons from './components/Buttons'

function App() {

  return (
    <div className="App">
      <Imageframe />
      <Tagline />
      <Buttons />
      <Aboutme />
      <Services />
      <Sociallinks />
    </div>
  )
}

export default App
