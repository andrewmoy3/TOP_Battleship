import { useState } from 'react'
import '../css/App.css'
import Banner from './Banner'
import Battlefield from './Battlefield'
import Game from './Game'
import Gameboard from './Gameboard'
import Guessesboard from './Guessesboard'

function App(props) {

  const { playerBoard, computerBoard, handleClick } = Game();
  return (
    <>
      <Banner />
      <div className='battlefields'>
        <div data-testid='playerBoard' id='playerBoard'>
          <Battlefield Gameboard={playerBoard} handleClick={handleClick} player='player'/>
          <Guessesboard Gameboard={playerBoard} handleClick={handleClick} player='player'/>
        </div>
        <div data-testid='computerBoard' id='computerBoard'>
          <Battlefield Gameboard={computerBoard} handleClick={handleClick} player='computer'/>
          <Guessesboard Gameboard={playerBoard} handleClick={handleClick} player='player'/>
        </div>
      </div>
    </>
  )
}

export default App
