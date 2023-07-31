/* eslint-disable no-undef */
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not
//  the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

import Gameboard from "../Components/Gameboard";
import Ship from '../Components/Ship'

describe('Gameboard: placing ships', () => {
    
    it('can place a ship at specific coordinates', () => {
        const gameboard = Gameboard();
        const ship = Ship(3); // Create a ship with length 3
      
        gameboard.placeShip(ship, 0, 0, 'y'); // Place the ship at (0, 0)
      
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 1)).toBe(true);
        expect(gameboard.hasShipAt(0, 2)).toBe(true);
      
        expect(gameboard.hasShipAt(1, 0)).toBe(false);
        expect(gameboard.hasShipAt(1, 1)).toBe(false);
      });  
      
    it('can wrap around x coordinates', () => {
        const gameboard = Gameboard();
        const size = gameboard.getSize()-1;
        const ship = Ship(3);
        gameboard.placeShip(ship, size, 0,'x');
        expect(gameboard.hasShipAt(size, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(1, 0)).toBe(true);
        expect(gameboard.hasShipAt(2, 0)).toBe(false);
        expect(gameboard.hasShipAt(size, 1)).toBe(false);
        expect(gameboard.hasShipAt(0, size)).toBe(false);
    })

    it('can wrap around y coordinates', () => {
        const gameboard = Gameboard();
        const size = gameboard.getSize()-1;
        const ship = Ship(3);
        gameboard.placeShip(ship, 0, size, 'y');
        expect(gameboard.hasShipAt(0, size)).toBe(true);
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 1)).toBe(true);

        expect(gameboard.hasShipAt(0, 2)).toBe(false);
        expect(gameboard.hasShipAt(1,size)).toBe(false);
    })

    it('can wrap around x coordinates', () => {
        const gameboard = Gameboard();
        const size = gameboard.getSize()-1;
        const ship = Ship(3);
        gameboard.placeShip(ship, size - 1, 0,'x');
        expect(gameboard.hasShipAt(size - 1, 0)).toBe(true);
        expect(gameboard.hasShipAt(size, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(1, 0)).toBe(false);
        expect(gameboard.hasShipAt(size, 1)).toBe(false);
        expect(gameboard.hasShipAt(0, size)).toBe(false);
    })

    it('can wrap around y coordinates', () => {
        const gameboard = Gameboard();
        const size = gameboard.getSize()-1;
        const ship = Ship(3);
        gameboard.placeShip(ship, 0, size - 1,'y');
        expect(gameboard.hasShipAt(0, size - 1)).toBe(true);
        expect(gameboard.hasShipAt(0, size)).toBe(true);
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
        expect(gameboard.hasShipAt(0, 1)).toBe(false);
        expect(gameboard.hasShipAt(1, size)).toBe(false);
        expect(gameboard.hasShipAt(size, 0)).toBe(false);
    })

    it('does not allow two ships to occupy the same spot', () => {
        const gameboard = Gameboard();
        const ship1 = Ship(3);
        const ship2 = Ship(5);
        gameboard.placeShip(ship1, 2, 0,'y');
        expect(gameboard.placeShip(ship2, 0, 0,'x')).toBeNull();
    })

    //checks if length of ship exceeds gameboard
    //checks if there are any available spots for ship
    //checks if ships can be placed next to each other?
}) 

describe('Gameboard: receiveAttack', () => {
    it('tests whether the attack hits a ship or not', () => {
        const gameboard = Gameboard();
        gameboard.placeShip(Ship(3), 0, 0, 'x');

        gameboard.receiveAttack(0, 0)
        gameboard.receiveAttack(1, 0)
        gameboard.receiveAttack(2, 0)
        gameboard.receiveAttack(0, 1)
        gameboard.receiveAttack(0, 2)
        gameboard.receiveAttack(0, 3)

        expect(gameboard.isHit(0, 0)).toBe(true);
        expect(gameboard.isHit(1, 0)).toBe(true);
        expect(gameboard.isHit(2, 0)).toBe(true);
        expect(gameboard.isHit(0, 1)).toBe(false);
        expect(gameboard.isHit(0, 2)).toBe(false);
        expect(gameboard.isHit(0, 3)).toBe(false);
    })

    it('tests whether the hit() function is called', () => {

        const mockHit = vi.fn()
        const ship = Ship(3)
        ship.hit = mockHit;

        const gameboard = Gameboard();
        gameboard.placeShip(ship, 0, 0, 'x');
        gameboard.receiveAttack(0, 0);

        expect(mockHit).toHaveBeenCalledTimes(1);
    })
})
