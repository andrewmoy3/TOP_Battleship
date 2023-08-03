// Begin your app by creating the Ship factory function.
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
// Ships should have a hit() function that increases the number of ‘hits’ in your ship.
// isSunk() should be a function that calculates it based on their length and the number of ‘hits’.
export default function Ship(len) {
    var length = len
    var numHit = 0

    const hit = function () {
        if (numHit < length) {
            numHit++
        }
    }

    const getSunk = function () {
        if (numHit == length) {
            return true
        }
        return false
    }

    const getLength = function () {
        return length
    }

    const getHits = function () {
        return numHit
    }

    return {
        hit,
        getSunk,
        getLength,
        getHits,
    }
}
