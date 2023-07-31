import React from "react";
import { useState, useEffect } from "react";
import '../css/Battlefield.css';
import Ship from "./Ship";

export default function Battlefield( { Gameboard } ){

    const [board, setBoard] = useState(Gameboard.getBoard())
    
    useEffect(() => {
        setBoard(Gameboard.getBoard());
    }, [Gameboard]);

    const place = function(x, y, dir){
        Gameboard.placeShip(Ship(2), x, y, dir)
        setBoard(Gameboard.getBoard())
    }

    return (
        <div className="battlefield">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="battlefieldCol">
                    {row.map((ship, columnIndex) => (
                        <div 
                        onClick={() => place(rowIndex, columnIndex, 'x')}
                        className={ship ? 'box ship' : 'box'} key={columnIndex}>{ship.name}</div>
                    ))}
                </div>
            ))}
      </div>
    )
}