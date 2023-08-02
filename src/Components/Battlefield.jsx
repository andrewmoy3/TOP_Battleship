import React, { useState, useEffect } from "react";
import propTypes from 'prop-types'
import '../css/Battlefield.css';
import Ship from "./Ship";

Battlefield.propTypes = {
    Gameboard: propTypes.shape({
      getBoard: propTypes.func.isRequired,
      placeShip: propTypes.func.isRequired,
    }).isRequired,
    handleClick: propTypes.func.isRequired,
    player: propTypes.isRequired,
};

export default function Battlefield({ Gameboard, handleClick, player }) {
  const [board, setBoard] = useState(Gameboard.getBoard());

  useEffect(() => {
    const newBoard = [...Gameboard.getBoard()];
    setBoard(newBoard);
  }, [Gameboard]);

  const place = function (x, y, dir) {
    const newBoard = [...board];
    handleClick(x, y, dir, player);
    setBoard(newBoard);
  };

  return (
    <div className="battlefield">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="battlefieldCol">
          {row.map((ship, columnIndex) => {
            const isHit = Gameboard.isHit(rowIndex, columnIndex);
            return(
              <div
                onClick={() => place(rowIndex, columnIndex, 'x')}
                className={`box ${ship ? 'ship' : ''} ${isHit ? 'hit' : ''}`}
                data-testid={`box-${rowIndex}-${columnIndex}`}
                key={columnIndex}
              >
              </div>
            )
          })}
        </div>
      ))}
    </div>
  );
}
