import AimableSubmarine from './AimableSubmarine'

describe('AimableSubmarine\'s', () => {
  let submarine: AimableSubmarine

  beforeEach(() => {
    submarine = new AimableSubmarine()
  })

  describe('constructor', () => {
    it('should set the initial horizontal position to the one specified', () => {
      const movedSubmarine = new AimableSubmarine(0, 10, 0)

      expect(movedSubmarine.horizontalPosition).toBe(10)
    })

    it('should set the initial depth to the one specified', () => {
      const movedSubmarine = new AimableSubmarine(15, 0, 0)

      expect(movedSubmarine.depth).toBe(15)
    })

    it('should set the initial aim to the one specified', () => {
      const movedSubmarine = new AimableSubmarine(0, 0, 20)

      expect(movedSubmarine.aim).toBe(20)
    })
  })

  describe('aim', () => {
    it('should increase when moving down a positive amount', () => {
      submarine.down(5)

      expect(submarine.aim).toBe(5)
    })

    it('should decrease when moving down a negative amount', () => {
      submarine.down(-5)

      expect(submarine.aim).toBe(-5)
    })

    it('should decrease when moving up a positive amount', () => {
      submarine.up(5)

      expect(submarine.aim).toBe(-5)
    })

    it('should increase when moving up a negative amount', () => {
      submarine.up(-5)

      expect(submarine.aim).toBe(5)
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
    it('should increase by aim * forward movement', () => {
      submarine.down(5)
      submarine.forward(10)

      expect(submarine.depth).toBe(50)
    })
  })
})
