import { useState , useEffect} from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

import Die from './components/Die'

function App() {
  const [dice, setDice] = useState(genArrOf10())
  const [turns, setTurns] = useState(0)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [dice])

  function genArrOf10() {
    const auxArr = []
    for (let i=0; i<10; i++){
      auxArr.push(generateNewDie())
    }
    return auxArr
  }

  function rollDice() {
    if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
        setTurns(prevTurn => prevTurn + 1)
    } else {
        setTenzies(false)
        setTurns(0)
        setDice(allNewDice())
    }
  }
  
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
    }))
  }

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <p className='instructions'><b>Your turns: {turns}</b></p>
      <div className='dice-container'>
        {
          dice.map( item => <Die value={item.value} isHeld={item.isHeld} id={item.id} key={item.id} holdFunc={hold}/>)
        }
      </div>
      <button onClick={rollDice} className="roll-button">{tenzies? "Reset Game" : "Roll it!"}</button>
    </div>
  )
}

export default App
