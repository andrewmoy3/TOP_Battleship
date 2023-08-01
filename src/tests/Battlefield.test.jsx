/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Battlefield from '../Components/Battlefield'
import Gameboard from '../Components/Gameboard';

describe('Battlefield tests', () => {
    it("Battlefield snapshot", () => {
        const board = Gameboard();
        const {container} = render(<Battlefield Gameboard={board} />)
        expect(container).toMatchSnapshot(); 
    })

    it('renders without errors', () => {
        const gameboard = Gameboard();
        render(<Battlefield Gameboard={gameboard} />);
      });
      
    it('displays the initial board correctly', () => {
        const gameboard = Gameboard(); 
        const { getAllByTestId } = render(<Battlefield Gameboard={gameboard} />);
        const boxes = getAllByTestId(/box-/i); // Match all elements with data-testid starting with "box-"
        expect(boxes).toHaveLength(100);
        expect(boxes.every((box) => box.classList.contains('ship'))).toBe(false);
    });
    
    it('correctly places a ship when clicking on a box', async () => {
        const gameboard = Gameboard(); 
        expect(gameboard.hasShipAt(0, 0)).toBe(false);
        const { getByTestId } = render(<Battlefield Gameboard={gameboard} />);
        const box = getByTestId('box-0-0');
        await userEvent.click(box);
        expect(gameboard.hasShipAt(0, 0)).toBe(true);
    });

    it('correctly renders the ship', async () => {
        const gameboard = Gameboard(); 
        expect(gameboard.hasShipAt(0, 0)).toBe(false);
        const { getByTestId } = render(<Battlefield Gameboard={gameboard} />);
        const box = getByTestId('box-0-0');
        await userEvent.click(box);
        expect(box.classList.contains('ship')).toBe(true);
    });

})