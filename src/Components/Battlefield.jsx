import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../css/Battlefield.css'
import Ship from './ship'

Battlefield.propTypes = {
    Gameboard: PropTypes.shape({
        getBoard: PropTypes.func.isRequired,
        placeShip: PropTypes.func.isRequired,
        hasShipAt: PropTypes.func.isRequired,
    }).isRequired,
    OppGameboard: PropTypes.shape({
        isGuessed: PropTypes.func.isRequired,
    }),
}

export default function Battlefield({ Gameboard, OppGameboard }) {
    const board = Gameboard.getBoard()

    return (
        <div className="battlefield">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="battlefieldCol">
                    {row.map((ship, columnIndex) => {
                        const isGuessed = OppGameboard.isGuessed(
                            rowIndex,
                            columnIndex
                        )
                        const hasShipAt = Gameboard.hasShipAt(
                            rowIndex,
                            columnIndex
                        )
                        return (
                            <div
                                // onClick={() => place(rowIndex, columnIndex, 'x', player)}
                                className={`box ${ship ? 'ship' : ''} ${
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
