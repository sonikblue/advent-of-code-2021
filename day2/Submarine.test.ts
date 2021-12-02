
import Submarine from './Submarine'

describe('Submarine\'s', () => {
  let submarine: Submarine

  beforeEach(() => {
    submarine = new Submarine()
  })

  describe('constructor', () => {
    it('should set the horizontal position to the one specified', () => {
      const movedSubmarine = new Submarine(0, 10)

      expect(movedSubmarine.horizontalPosition).toBe(10)
    })

    it('should set the depth to the one specified', () => {
      const movedSubmarine = new Submarine(15, 0)

      expect(movedSubmarine.depth).toBe(15)
    })
  })

  describe('horizontal position', () => {
    it('should increase when moving forward a positive amount', () => {
      submarine.moveForward(5)

      expect(submarine.horizontalPosition).toBe(5)
    })

    it('should decrease when moving forward a negative amount', () => {
      submarine.moveForward(-5)

      expect(submarine.horizontalPosition).toBe(-5)
    })
  })

  describe('depth', () => {
    it('should increase when moving down a positive amount', () => {
      submarine.descend(5)

      expect(submarine.depth).toBe(5)
    })

    it('should decrease when moving down a negative amount', () => {
      submarine.descend(-5)

      expect(submarine.depth).toBe(-5)
    })

    it('should decrease when moving up a positive amount', () => {
      submarine.ascend(5)

      expect(submarine.depth).toBe(-5)
    })

    it('should increase when moving up a negative amount', () => {
      submarine.ascend(-5)

      expect(submarine.depth).toBe(5)
    })
  })
})
