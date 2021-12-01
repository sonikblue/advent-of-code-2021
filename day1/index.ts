import { readFileSync } from 'fs'

export function readInput(filename: string): string[] {
  return readFileSync(filename, 'utf8').split('\n')
}

export function calculateNumberOfDepthIncreases(depthMeasurements: string[]): number {
  let numberOfDepthIncreases = 0

  depthMeasurements.forEach((line, currentIndex, lines) => {
    if (currentIndex === 0) {
      return
    }

    const currentDepth = parseInt(line)
    const previousDepth = parseInt(lines[currentIndex - 1])

    if (!currentDepth || !previousDepth) {
      throw Error('Could not parse the input file!')
    }

    if (currentDepth > previousDepth) {
      numberOfDepthIncreases++
    }
  })

  return numberOfDepthIncreases
}

const input = readInput('day1/input.txt')
const numberOfDepthIncreases = calculateNumberOfDepthIncreases(input)
console.log('Number of depth increases: %d', numberOfDepthIncreases)
