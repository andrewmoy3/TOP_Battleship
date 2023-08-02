
import Ship from "./Ship"

export default function Gameboard(){

    const size = 10;
    const board = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
    const guessesBoard = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));

    const receiveAttack = function(x, y){
        guessesBoard[x][y] = 1;
        if(board[x][y]){
            board[x][y].hit();
        }
    }
    const placeShip = function(ship, x, y, dir){
        const len = ship.getLength();
        for(let i=0;i<len;i++){
            if(dir === 'x'){
                if(board[x+i][y])return null;
                board[x+i][y] = ship;
            }else{
                if(board[x][y+i])return null;
                board[x][y+i] = ship;
            }
            if(x+i == size-1 && dir == 'x') x = - i - 1;
            if(y+i == size-1 && dir == 'y') y = - i - 1;
        }
    }

    // functions below are for testing/accessing private variables
    const hasShipAt = function(x, y){
        if(board[x][y])return true;
        return false;
    }
    const getSize = function(){return size}
    const isHit = function(x,y){
        if(guessesBoard[x][y] && board[x][y])return true
        return false;
    }
    const allSunk = function(){
        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                if(board[i][j] && !guessesBoard[i][j]){
                    return false;
                }
            }
        }
        return true;
    }
    const isGuessed = function(x,y){
        if(guessesBoard[x][y]){
            return true
        }
        return false;
    }
    const getBoard = function(){return board}

    return {
        receiveAttack,
        placeShip,
        hasShipAt,
        getSize,
        isHit,
        allSunk,
        isGuessed,
        getBoard,
    }
}