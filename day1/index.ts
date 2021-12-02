import readInput from '../common/readInput'

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
    // No previous value to compare against.
    if (currentIndex === 0) {
      return
    }

    const currentDepth = calculateSumForWindow(getWindow(lines, currentIndex, windowSize))
    const previousDepth = calculateSumForWindow(getWindow(lines, currentIndex - 1, windowSize))

    if (!currentDepth || !previousDepth) {
      throw Error('Could not parse the input file!')
    }

    if (currentDepth > previousDepth) {
      numberOfDepthIncreases++
    }
  })

  return numberOfDepthIncreases
}

function getWindow(measurements: string[], startIndex: number, windowSize: number): string[] {
  return measurements.slice(startIndex, startIndex + windowSize)
}

function calculateSumForWindow(measurements: string[]): number {
  return measurements
    .map((measurement) => parseInt(measurement))
    .reduce((previousValue, currentValue) => previousValue + currentValue)
}

const input = readInput('day1/input.txt')

const numDepthIncreasesWindowSize1 = calculateNumberOfDepthIncreases(input)
console.log('Number of depth increases with windows size of 1: %d', numDepthIncreasesWindowSize1)

const numDepthIncreasesWindowSize3 = calculateNumberOfDepthIncreases(input, 3)
console.log('Number of depth increases with windows size of 3: %d', numDepthIncreasesWindowSize3)
