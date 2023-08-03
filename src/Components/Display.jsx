import { useState } from 'react'
import '../css/Display.css'
import Battlefield from './Battlefield'
import Gameboard from './Gameboard'
import PropTypes from 'prop-types'
import Guessesboard from './Guessesboard'

Display.propTypes = {
    // playerBoard: Gameboard,
    // computerBoard: Gameboard,
    handleClick: PropTypes.func,
}
function Display({ playerBoard, computerBoard, handleClick }) {
    const [board, setBoard] = useState(playerBoard.getBoard())

    const place = function (x, y, dir, player) {
        handleClick(x, y, dir, player)
        const updatedBoard =
            player === 'player'
                ? playerBoard.getBoard()
                : computerBoard.getBoard()
        setBoard([...updatedBoard])
        // setBoard(board.getBoard());
    }

    return (
        <>
            {/* <Banner /> */}
            <div className="battlefields">
                <div data-testid="playerBoard" id="playerBoard">
                    <Battlefield
                        Gameboard={playerBoard}
                        OppGameboard={computerBoard}
                    />
                    <Battlefield
                        Gameboard={computerBoard}
                        OppGameboard={playerBoard}
                    />
                </div>
                <div data-testid="computerBoard" id="computerBoard">
                    <Guessesboard
                        Gameboard={playerBoard}
                        OppGameboard={computerBoard}
                        place={place}
                        player="player"
                    />
                    <Guessesboard
                        Gameboard={computerBoard}
                        OppGameboard={playerBoard}
                        place={place}
                        player="computer"
                    />
                </div>
            </div>
        </>
    )
}

export default Display
