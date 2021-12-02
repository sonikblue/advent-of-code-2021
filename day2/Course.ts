// An operation to perform in response to a course instruction
type CourseOperation = (distance: number) => void

export default class Course {
  private instructions: string[]
  private operations: Record<string, CourseOperation>

  /**
   * Create a new Course with a given set of instructions and a set of operations to perform
   * based on those instructions.
   *
   * @param instructions The instructions that make up this course. A list of strings in the format "[operation] [distance]".
   * @param operations The set of operations to perform in response to the course's instructions. An object containing a key
   * for each supported instruction, which maps to a function that will accept the distance of the instruction and perform the
   * desired operation with it.
   */
  constructor(instructions: string[], operations: Record<string, CourseOperation>) {
    this.instructions = instructions
    this.operations = operations
  }

  /**
   * Execute this course.
   *
   * Iterates over all instructions and executes the appropriate instruction with the specified distance.
   * Throws an error if an unknown instruction is encountered.
   */
  execute() {
    this.instructions.forEach((instruction) => {
      const [operation, distance] = instruction.split(' ')

      const numericDistance = parseInt(distance)
      if (!numericDistance) {
        throw new Error('Encountered a non-numeric distance: ' + distance)
      }

      const operationCallback = this.operations[operation]
      if (!operationCallback) {
        throw new Error('Encountered an unknown operation: ' + operation)
      }

      operationCallback(numericDistance)
    })
  }
}
