import { useState } from 'react'
import '../css/App.css'
import Banner from './Banner'
import Battlefield from './Battlefield'
import Gameboard from './Gameboard'
import Player from './Player'
import Ship from './Ship'

function App(props) {
  const player = Player();
  const computer = Player();
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  playerBoard.placeShip(Ship(2), 0, 0, 'y');
  playerBoard.placeShip(Ship(2), 1, 0, 'y');
  playerBoard.placeShip(Ship(3), 2, 0, 'y');
  playerBoard.placeShip(Ship(4), 3, 0, 'y');
  playerBoard.placeShip(Ship(5), 4, 0, 'y');
  // computerBoard.placeShip(Ship(2), 0, 0, 'y');
  // computerBoard.placeShip(Ship(2), 1, 0, 'y');
  // computerBoard.placeShip(Ship(3), 2, 0, 'y');
  // computerBoard.placeShip(Ship(4), 3, 0, 'y');
  // computerBoard.placeShip(Ship(5), 4, 0, 'y');

// You need methods to render the gameboards and to take user input for attacking. 
// For attacks, let the user click on a coordinate in the enemy Gameboard.
// The game loop should step through the game turn by turn using only methods from other objects. 

  return (
    <>
      <Banner />
      <div className='battlefields'>
        <Battlefield Gameboard={playerBoard} />
        <Battlefield Gameboard={computerBoard} />
      </div>
    </>
  )
}

export default App
