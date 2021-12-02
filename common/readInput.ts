import { readFileSync } from 'fs'

/**
 * Read all lines in the specified file.
 * @param filename The path to the file to be read.
 * @returns A list of all lines in the file.
 */
export default function readInput(filename: string): string[] {
  return readFileSync(filename, 'utf8').split('\n')
}
