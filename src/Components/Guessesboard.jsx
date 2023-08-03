import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../css/Battlefield.css'
import Ship from './ship'

Guessesboard.propTypes = {
    Gameboard: PropTypes.shape({
        getBoard: PropTypes.func.isRequired,
        placeShip: PropTypes.func.isRequired,
        getGuesses: PropTypes.func.isRequired,
        isGuessed: PropTypes.func.isRequired,
        hasShipAt: PropTypes.func.isRequired,
    }).isRequired,
    player: PropTypes.string,
    place: PropTypes.func,
}

export default function Guessesboard({
    Gameboard,
    OppGameboard,
    place,
    player,
}) {
    const board = Gameboard.getBoard()
    return (
        <div className="battlefield">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="battlefieldCol">
                    {row.map((ship, columnIndex) => {
                        const isGuessed = Gameboard.isGuessed(
                            rowIndex,
                            columnIndex
                        )
                        const hasShipAt = OppGameboard.hasShipAt(
                            rowIndex,
                            columnIndex
                        )
                        return (
                            <div
                                onClick={() =>
                                    place(rowIndex, columnIndex, 'x', player)
                                }
                                className={`box ${
                                    isGuessed
                                        ? hasShipAt
                                            ? 'guessed hit'
                                            : 'guessed'
                                        : ''
                                }`}
                                data-testid={`box-${rowIndex}-${columnIndex}`}
                                key={columnIndex}
                            ></div>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
