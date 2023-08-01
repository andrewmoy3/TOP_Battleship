/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from '../Components/App'

describe('App tests', () => {
    it('tests for 2 10 by 10 grids', () => {
        
    })

    it("App snapshot", () => {
        const {container} = render(<App />)
        expect(container).toMatchSnapshot(); // why doesnt screen work?
    })
})