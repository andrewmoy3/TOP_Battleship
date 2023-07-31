
import Ship from "./Ship"

export default function Gameboard(){

    const size = 10;
    const board = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));

    const receiveAttack = function(x, y){
        if(board[x,y])return true;
        return false;
    }
    const placeShip = function(ship, x, y, dir){
        const len = ship.getLength();
        for(let i=0;i<len;i++){
            if(dir === 'x'){
                if(board[x+i][y])return null;
                board[x+i][y]++;
            }else{
                if(board[x][y+i])return null;
                board[x][y+i]++;
            }
            if(x+i == size-1 && dir == 'x') x = - i - 1;
            if(y+i == size-1 && dir == 'y') y = - i - 1;
        }
    }

    const hasShipAt = function(x, y){
        if(board[x][y])return true;
        return false;
    }

    const getSize = function(){return size}

    return {
        receiveAttack,
        placeShip,
        hasShipAt,
        getSize,
    }
}