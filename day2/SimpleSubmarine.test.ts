import SimpleSubmarine from './SimpleSubmarine'

describe('SimpleSubmarine\'s', () => {
  let submarine: SimpleSubmarine

  beforeEach(() => {
    submarine = new SimpleSubmarine()
  })

  describe('constructor', () => {
    it('should set the horizontal position to the one specified', () => {
      const movedSubmarine = new SimpleSubmarine(0, 10)

      expect(movedSubmarine.horizontalPosition).toBe(10)
    })

    it('should set the depth to the one specified', () => {
      const movedSubmarine = new SimpleSubmarine(15, 0)

      expect(movedSubmarine.depth).toBe(15)
    })
  })

  describe('horizontal position', () => {
    it('should increase when moving forward a positive amount', () => {
      submarine.forward(5)

      expect(submarine.horizontalPosition).toBe(5)
    })

    it('should decrease when moving forward a negative amount', () => {
      submarine.forward(-5)

      expect(submarine.horizontalPosition).toBe(-5)
    })
  })

  describe('depth', () => {
    it('should increase when moving down a positive amount', () => {
      submarine.down(5)

      expect(submarine.depth).toBe(5)
    })

    it('should decrease when moving down a negative amount', () => {
      submarine.down(-5)

      expect(submarine.depth).toBe(-5)
    })

    it('should decrease when moving up a positive amount', () => {
      submarine.up(5)

      expect(submarine.depth).toBe(-5)
    })

    it('should increase when moving up a negative amount', () => {
      submarine.up(-5)

      expect(submarine.depth).toBe(5)
    })
  })
})
