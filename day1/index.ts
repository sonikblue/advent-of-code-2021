import { readFileSync } from 'fs'

/**
 * Read all lines in the specified file.
 * @param filename The path to the file to be read.
 * @returns A list of all lines in the file.
 */
export function readInput(filename: string): string[] {
  return readFileSync(filename, 'utf8').split('\n')
}

/**
 * Calculate the number of depth increases in an ordered list of depth measurements.
 *
 * You can optionally provide the size of the sliding window to use in order to average measurements (the default is 1).
 *
 * @param depthMeasurements The list of depth measurements to calculate the number of depth increases for.
 * @param windowSize The size of the sliding window to use when averaging measurements.
 * @returns The number of depth increases in the list of measurements.
 */
export function calculateNumberOfDepthIncreases(depthMeasurements: string[], windowSize: number = 1): number {
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
