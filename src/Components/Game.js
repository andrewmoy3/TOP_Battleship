import Gameboard from './Gameboard'
import Player from './Player'
import Ship from './ship'

export default function Game(){
    // const player = Player();
    // const computer = Player();

    // 0 = placing, 1 = game, 2 = game over
    let state = 1;
    // p = player's turn, c = computer's turn
    let turn = 'player';

    //create Gameboards
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();

    //place ships ; for now, placing them on predetermined squares
    //this will be a selection phase later
        // disallow ships to be placed on same square
    playerBoard.placeShip(Ship(2), 0, 0, 'y');
    playerBoard.placeShip(Ship(2), 1, 0, 'y');
    playerBoard.placeShip(Ship(3), 2, 0, 'y');
    playerBoard.placeShip(Ship(4), 3, 0, 'y');
    playerBoard.placeShip(Ship(5), 4, 0, 'y');
    computerBoard.placeShip(Ship(2), 0, 0, 'y');
    computerBoard.placeShip(Ship(2), 1, 0, 'y');
    computerBoard.placeShip(Ship(3), 2, 0, 'y');
    computerBoard.placeShip(Ship(4), 3, 0, 'y');
    computerBoard.placeShip(Ship(5), 4, 0, 'y');

    // after placing ships, take turns choosing squares to attack
        // check if the game is over

    const handleClick = function(x, y, dir, player){
        const board = player === 'player' ? playerBoard : computerBoard;
        if(state == 0){
            board.placeShip(Ship(2), x, y, dir);   
        }else if (state == 1){
            if(turn == player && !board.isGuessed(x,y)){
                board.receiveAttack(x, y)
                player === 'player' ? turn = 'computer' : turn = 'player';
            }
            board.allSunk() ? state = 2 : '';
        }
        return;
    }


    // when game is over, show who won, reveal both boards, new-game button

    return {
        playerBoard,
        computerBoard,
        handleClick,
    }
}
