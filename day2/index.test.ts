import AimableSubmarine from './AimableSubmarine'
import { moveSubmarine } from './index'
import SimpleSubmarine from './SimpleSubmarine'

describe('moveSubmarine', () => {
  it('should move a simple submarine as expected', () => {
    const submarine = new SimpleSubmarine()
    const instructions: string[] = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ]

    moveSubmarine(submarine, instructions)

    expect(submarine.horizontalPosition).toBe(15)
    expect(submarine.depth).toBe(10)
  })

  it('should move an aimable submarine as expected', () => {
    const submarine = new AimableSubmarine()
    const instructions: string[] = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ]

    moveSubmarine(submarine, instructions)

    expect(submarine.horizontalPosition).toBe(15)
    expect(submarine.depth).toBe(60)
  })
})
