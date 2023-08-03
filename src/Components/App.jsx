import { useState } from 'react'
import '../css/App.css'
import Display from './Display'
import Game from './Game'
import Gameover from './Gameover'
import Battlefield from './Battlefield'

let playerBoard, computerBoard, handleClick

function App() {
    const [isGameOver, setIsGameOver] = useState(false)

    if (isGameOver == false) {
        const game = Game(setIsGameOver)
        playerBoard = game.playerBoard
        computerBoard = game.computerBoard
        handleClick = game.handleClick
    }

    const onClose = function () {
        setIsGameOver(false)
    }
    return (
        <>
            {isGameOver ? (
                <>
                    <Gameover onClose={onClose} />
                    <div className="battlefields">
                        <div data-testid="playerBoard" id="playerBoard">
                            <Battlefield
                                Gameboard={playerBoard}
                                OppGameboard={computerBoard}
                            />
                        </div>
                        <div data-testid="computerBoard" id="computerBoard">
                            <Battlefield
                                Gameboard={computerBoard}
                                OppGameboard={playerBoard}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <Display
                    playerBoard={playerBoard}
                    computerBoard={computerBoard}
                    handleClick={handleClick}
                />
            )}
        </>
    )
}

export default App
