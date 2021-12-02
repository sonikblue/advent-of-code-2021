import Course from './Course'

describe('Course', () => {
  it('should execute the expected operations in the specified order', () => {
    const mockForward = jest.fn()
    const mockDown = jest.fn()
    const operations = {
      forward: mockForward,
      down: mockDown
    }
    const instructions = [
      'forward 1',
      'down 2',
      'forward 3'
    ]
    const course = new Course(instructions, operations)

    course.execute()

    expect(mockForward).toHaveBeenCalledTimes(2)
    expect(mockForward).toHaveBeenNthCalledWith(1, 1)
    expect(mockForward).toHaveBeenNthCalledWith(2, 3)

    expect(mockDown).toHaveBeenCalledTimes(1)
    expect(mockDown).toHaveBeenCalledWith(2)
  })

  it('should throw an error when attempting to execute an unknown instruction', () => {
    const operations = {}
    const instructions = ['unknown 7']
    const course = new Course(instructions, operations)

    expect(() => { course.execute() }).toThrowError()
  })

  it('should throw an error when attempting to execute an instruction with a non-numeric distance', () => {
    const operations = {}
    const instructions = ['forward foo']
    const course = new Course(instructions, operations)

    expect(() => { course.execute() }).toThrowError()
  })
})
