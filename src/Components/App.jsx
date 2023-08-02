import { useState } from 'react'
import '../css/App.css'
import Banner from './Banner'
import Battlefield from './Battlefield'
import Game from './Game'
import Gameboard from './Gameboard'

function App(props) {

  const { playerBoard, computerBoard, handleClick } = Game();
  return (
    <>
      <Banner />
      <div className='battlefields'>
        <div data-testid='playerBoard' id='playerBoard'>
          <Battlefield Gameboard={playerBoard} handleClick={handleClick} player='player'/>
        </div>
        <div data-testid='computerBoard' id='computerBoard'>
          <Battlefield Gameboard={computerBoard} handleClick={handleClick} player='computer'/>
        </div>
      </div>
    </>
  )
}

export default App
