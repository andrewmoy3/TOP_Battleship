import React, { useState, useEffect } from "react";
import propTypes from 'prop-types'
import '../css/Battlefield.css';
import Ship from "./Ship";

Guessesboard.propTypes = {
    Gameboard: propTypes.shape({
      getBoard: propTypes.func.isRequired,
      placeShip: propTypes.func.isRequired,
      getGuesses: propTypes.func.isRequired,
    }).isRequired,
    handleClick: propTypes.func.isRequired,
    player: propTypes.isRequired,
};

export default function Guessesboard({ Gameboard, handleClick, player }) {
  const [board, setBoard] = useState(Gameboard.getGuesses());

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
            const isGuessed = Gameboard.isGuessed(rowIndex, columnIndex);
            const hasShipAt = Gameboard.hasShipAt(rowIndex, columnIndex);
            return(
              <div
                className={`box ${isGuessed ? hasShipAt ? 'guessed hit' : 'guessed' : ''}`}
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
