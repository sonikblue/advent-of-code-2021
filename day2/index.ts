import readInput from '../common/readInput'
import AimableSubmarine from './AimableSubmarine'
import Course from './Course'
import SimpleSubmarine from './SimpleSubmarine'
import Submarine from './Submarine'

export function moveSubmarine(submarine: Submarine, instructions: string[]) {
  const course = new Course(instructions, {
    forward: (distance) => { submarine.forward(distance) },
    down: (distance) => { submarine.down(distance) },
    up: (distance) => { submarine.up(distance) }
  })

  course.execute()
}

const input = readInput('day2/input.txt')

const part1Submarine = new SimpleSubmarine()
moveSubmarine(part1Submarine, input)
console.log('Simple Submarine horizontal postion: %d', part1Submarine.horizontalPosition)
console.log('Simple Submarine depth: %d', part1Submarine.depth)
console.log('Simple Submarine horizontal position * depth: %d', part1Submarine.horizontalPosition * part1Submarine.depth)

console.log()

const part2Submarine = new AimableSubmarine()
moveSubmarine(part2Submarine, input)
console.log('Aimable Submarine horizontal postion: %d', part2Submarine.horizontalPosition)
console.log('Aimable Submarine depth: %d', part2Submarine.depth)
console.log('Aimable Submarine Horizontal position * depth: %d', part2Submarine.horizontalPosition * part2Submarine.depth)
