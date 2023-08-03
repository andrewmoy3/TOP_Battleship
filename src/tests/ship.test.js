/* eslint-disable no-undef */
import Ship from '../Components/Ship'

describe('Ship tests', () => {
    it('is correct length', () => {
        const ship = Ship(5)
        expect(ship.getLength()).toBe(5)
    })

    it('hit increments numHits', () => {
        const ship = Ship(3)
        expect(ship.getHits()).toBe(0)
        ship.hit()
        expect(ship.getHits()).toBe(1)
        ship.hit()
        expect(ship.getHits()).toBe(2)
        ship.hit()
        expect(ship.getHits()).toBe(3)
    })

    it('sinks correctly with ship of zero length', () => {
        const ship = Ship(0)
        expect(ship.getSunk()).toBe(true)
    })

    it('3 hits sinks a ship of length three', () => {
        const ship = Ship(3)
        expect(ship.getSunk()).toBe(false)
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.getHits()).toBe(3)
        expect(ship.getSunk()).toBe(true)
    })
})
