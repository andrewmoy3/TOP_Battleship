import React, { useState, useEffect } from "react";
import propTypes from 'prop-types'
import '../css/Battlefield.css';
import Ship from "./ship";

Battlefield.propTypes = {
    Gameboard: propTypes.shape({
      getBoard: propTypes.func.isRequired,
      placeShip: propTypes.func.isRequired,
    }).isRequired,
    place: propTypes.func.isRequired,
    player: propTypes.isRequired,
};

export default function Battlefield({ Gameboard, place, player }) {
  const board = Gameboard.getBoard();

  return (
    <div className="battlefield">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="battlefieldCol">
          {row.map((ship, columnIndex) => {
            const isGuessed = Gameboard.isGuessed(rowIndex, columnIndex);
            const hasShipAt = Gameboard.hasShipAt(rowIndex, columnIndex);
            return(
              <div
                onClick={() => place(rowIndex, columnIndex, 'x', player)}
                className={`box ${ship ? 'ship' : ''} ${isGuessed ? hasShipAt ? 'guessed hit' : 'guessed' : ''}`}
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
