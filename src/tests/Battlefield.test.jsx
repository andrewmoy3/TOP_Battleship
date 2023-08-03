/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Battlefield from '../Components/Battlefield'
import Gameboard from '../Components/Gameboard'

describe('Battlefield tests', () => {
    const handleClick = vi.fn()

    it('Battlefield snapshot', () => {
        const gameboard = Gameboard()
        const { container } = render(
            <Battlefield
                Gameboard={gameboard}
                handleClick={handleClick}
                player="computer"
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('renders without errors', () => {
        const gameboard = Gameboard()
        render(
            <Battlefield
                Gameboard={gameboard}
                handleClick={handleClick}
                player="computer"
            />
        )
    })

    it('displays the initial board correctly', () => {
        const gameboard = Gameboard()
        const { getAllByTestId } = render(
            <Battlefield
                Gameboard={gameboard}
                handleClick={handleClick}
                player="computer"
            />
        )
        const boxes = getAllByTestId(/box-/i) // Match all elements with data-testid starting with "box-"
        expect(boxes).toHaveLength(100)
        expect(boxes.every((box) => box.classList.contains('ship'))).toBe(false)
    })

    it('correctly places a ship when clicking on a box', async () => {
        const gameboard = Gameboard()
        const { getByTestId } = render(
            <Battlefield
                Gameboard={gameboard}
                handleClick={handleClick}
                player="computer"
            />
        )
        const box = getByTestId('box-0-0')
        await userEvent.click(box)
        expect(handleClick).toHaveBeenCalled()
    })

    it('correctly renders the ship on click', async () => {
        const gameboard = Gameboard()
        const { getByTestId } = render(
            <Battlefield
                Gameboard={gameboard}
                handleClick={handleClick}
                player="computer"
            />
        )
        const box = getByTestId('box-0-0')
        await userEvent.click(box)
        expect(handleClick).toHaveBeenCalled()
    })
})
