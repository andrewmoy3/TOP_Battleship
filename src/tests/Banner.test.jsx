/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Banner from '../Components/Banner'

describe('renders the banner properly', () => {
    it('snapshot', () => {
        const { container } = render(<Banner />)
        expect(container).toMatchSnapshot()
    })

    it("contains the title 'Battleship'", () => {
        render(<Banner />)
        const titleElement = screen.getByText('battleship', { exact: false })
        expect(titleElement).toBeInTheDocument()
        expect(titleElement.textContent).toMatch('Battleship')
    })

    it('contains a title', () => {
        render(<Banner />)
        const title = screen.getByTestId('title')
        expect(title).toBeInTheDocument()
    })

    it('contains a signature', () => {
        render(<Banner />)
        const signature = screen.getByTestId('signature')
        expect(signature).toBeInTheDocument()
    })
})
