/* eslint-disable no-undef */
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not
//  the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

import Gameboard from "../Components/Gameboard";

describe('Gameboard: placing ships', () => {
    
    it('can place a ship at specific coordinates', () => {
        const gameboard = Gameboard();
        const ship = Ship(3); // Create a ship with length 3
      
        gameboard.placeShip(ship, 0, 0); // Place the ship at (0, 0)
      
        // Check if the ship exists at the specified coordinates
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 1)).toBe(true);
        expect(gameboard.hasShipAt(0, 2)).toBe(true);
      
        // Check other positions to ensure no ship exists there
        expect(gameboard.hasShipAt(1, 0)).toBe(false);
        expect(gameboard.hasShipAt(1, 1)).toBe(false);
        // ... (continue checking other positions)
      });      

})