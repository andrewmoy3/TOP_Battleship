import Gameboard from './Gameboard'
import Ship from './Ship'

export default function Game(setGameOver) {
    // 0 = placing, 1 = game, 2 = game over
    let state = 1
    // p = player's turn, c = computer's turn
    let turn = 'player'

    //create Gameboards
    const playerBoard = Gameboard()
    const computerBoard = Gameboard()

    //place ships ; for now, placing them on predetermined squares
    //this will be a selection phase later
    // disallow ships to be placed on same square

    const generateCompShips = function () {
        var dir
        const lengths = [2, 2, 3, 4, 5]
        var x = Math.floor(Math.random() * 10)
        var y = Math.floor(Math.random() * 10)
        for (let i = 0; i < 5; i++) {
            Math.random() > 0.5 ? (dir = 'x') : (dir = 'y')
            while (checkConflicts(x, y, dir, lengths[i])) {
                x = Math.floor(Math.random() * 10)
                y = Math.floor(Math.random() * 10)
            }
            computerBoard.placeShip(Ship(lengths[i]), x, y, dir)
        }
    }

    const checkConflicts = function (x, y, dir, len) {
        for (let i = 0; i < len; i++) {
            if (x > 9 || x < 0 || y > 9 || y < 0) return true
            if (computerBoard.hasShipAt(x, y)) return true
            if (x != 9 && computerBoard.hasShipAt(x + 1, y)) return true
            if (x != 0 && computerBoard.hasShipAt(x - 1, y)) return true
            if (y != 0 && computerBoard.hasShipAt(x, y + 1)) return true
            if (y != 0 && computerBoard.hasShipAt(x, y - 1)) return true
            dir == 'x' ? x++ : y++
        }
        return false
    }
    playerBoard.placeShip(Ship(2), 0, 0, 'x')
    // playerBoard.placeShip(Ship(2), 0, 1, 'x')
    // playerBoard.placeShip(Ship(3), 0, 2, 'x')
    // playerBoard.placeShip(Ship(4), 0, 3, 'x')
    // playerBoard.placeShip(Ship(5), 0, 4, 'x')
    generateCompShips()

    const isGameOver = function (player) {
        const board =
            player === 'player'
                ? computerBoard.getBoard()
                : playerBoard.getBoard()
        const guessesBoard =
            player === 'player'
                ? playerBoard.getGuesses()
                : computerBoard.getGuesses()
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j] && !guessesBoard[i][j]) {
                    return false
                }
            }
        }
        return true
    }
    // after placing ships, take turns choosing squares to attack
    // check if the game is over
    const handleClick = function (x, y, dir, player) {
        const board = player === 'player' ? playerBoard : computerBoard
        if (state == 0) {
            board.placeShip(Ship(2), x, y, dir)
        } else if (state == 1) {
            if (turn == player && !board.isGuessed(x, y)) {
                board.receiveAttack(x, y)
                player === 'player' ? (turn = 'computer') : (turn = 'player')
            }
            if (isGameOver(player)) {
                setGameOver(true)
                state = 2
            }
        }
        return
    }

    // when game is over, show who won, reveal both boards, new-game button
    // const gameOver = function (player) {
    //     return player
    // }

    return {
        playerBoard,
        computerBoard,
        handleClick,
    }
}
