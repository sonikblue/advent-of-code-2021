import readInput from '../common/readInput'
import Course from './Course'
import Submarine from './Submarine'

export function moveSubmarine(submarine: Submarine, instructions: string[]) {
  const course = new Course(instructions, {
    forward: (distance) => { submarine.moveForward(distance) },
    down: (distance) => { submarine.descend(distance) },
    up: (distance) => { submarine.ascend(distance) }
  })

  course.execute()
}

const input = readInput('day2/input.txt')
const submarine = new Submarine()

moveSubmarine(submarine, input)

console.log('Submarine horizontal postion: %d', submarine.horizontalPosition)
console.log('Submarine depth: %d', submarine.depth)
console.log('Horizontal position * depth: %d', submarine.horizontalPosition * submarine.depth)
