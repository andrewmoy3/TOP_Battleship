// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays.
// The AI does not have to be smart, but it should know whether or not a given move is legal.
//  (i.e. it shouldn’t shoot the same coordinate twice).
export default function Player() {
    const board = Array.from({ length: 10 }, () =>
        Array.from({ length: 10 }, () => 0)
    )

    const attack = function () {
        var x,
            y = 5
        while (board[x][y] == 0) {
            x, (y = Math.floor(Math.random() * 10))
        }
        board[x][y] = 1
        return { x, y }
    }

    return {
        attack,
    }
}
