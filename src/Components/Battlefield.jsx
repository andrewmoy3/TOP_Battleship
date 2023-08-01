import React, { useState, useEffect } from "react";
import '../css/Battlefield.css';
import Ship from "./Ship";

export default function Battlefield({ Gameboard }) {
  const [board, setBoard] = useState(Gameboard.getBoard());

  useEffect(() => {
    const newBoard = [...Gameboard.getBoard()];
    setBoard(newBoard);
  }, [Gameboard]);

  const place = function (x, y, dir) {
    const newBoard = [...board];
    Gameboard.placeShip(Ship(2), x, y, dir);
    setBoard(newBoard);
  };

  return (
    <div className="battlefield">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="battlefieldCol">
          {row.map((ship, columnIndex) => (
            <div
              onClick={() => place(rowIndex, columnIndex, 'x')}
              className={ship ? 'box ship' : 'box'}
              data-testid={`box-${rowIndex}-${columnIndex}`}
              key={columnIndex}
            >
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
