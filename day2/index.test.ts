import { moveSubmarine } from './index'
import Submarine from './Submarine'

describe('moveSubmarine', () => {
  it('should move the submarine as expected', () => {
    const submarine = new Submarine()
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
})
