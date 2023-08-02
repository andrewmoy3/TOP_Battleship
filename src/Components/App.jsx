import { useState, useEffect } from 'react'
import '../css/App.css'
import Banner from './Banner'
import Battlefield from './Battlefield'
import Game from './Game'
import Gameboard from './Gameboard'
import Guessesboard from './Guessesboard'

function App({ playerBoard, computerBoard, handleClick }) {

  // console.log(playerBoard.getBoard())
  const [board, setBoard] = useState(playerBoard.getBoard());

  // useEffect(() => {
  //   const newBoard = [...playerBoard.getBoard()];
  //   setBoard(newBoard);
  // }, [playerBoard]);

  const place = function (x, y, dir, player) {
    // const newBoard = [...board];
    handleClick(x, y, dir, player);
    const updatedBoard = player === 'player' ? playerBoard.getBoard() : computerBoard.getBoard();
    setBoard([...updatedBoard]);
    // setBoard(board.getBoard());
  };

  return (
    <>
      <Banner />
      <div className='battlefields'>
        <div data-testid='playerBoard' id='playerBoard'>
          <Battlefield Gameboard={playerBoard} place={place} player='player'/>
          {/* <Guessesboard Gameboard={playerBoard} handleClick={handleClick} player='player'/> */}
        </div>
        <div data-testid='computerBoard' id='computerBoard'>
          <Battlefield Gameboard={computerBoard} place={place} player='computer'/>
          {/* <Guessesboard Gameboard={playerBoard} handleClick={handleClick} player='player'/> */}
        </div>
      </div>
    </>
  )
}

export default App
