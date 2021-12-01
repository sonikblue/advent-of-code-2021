import { calculateNumberOfDepthIncreases } from './index'

describe('calculateNumberOfDepthIncreases', () => {
  it('should correctly calculate the number of times the depth increases', () => {
    const actualNumberOfDepthIncreases = calculateNumberOfDepthIncreases([
      '100',
      '101',
      '102'
    ])

    expect(actualNumberOfDepthIncreases).toBe(2)
  })

  it('should ignore depth decreases', () => {
    const actualNumberOfDepthIncreases = calculateNumberOfDepthIncreases([
      '199',
      '200',
      '208',
      '210',
      '200',
      '207',
      '240',
      '269',
      '260',
      '263'
    ])

    expect(actualNumberOfDepthIncreases).toBe(7)
  })

  it('should return zero if an empty array is passed', () => {
    const actualNumberOfDepthIncreases = calculateNumberOfDepthIncreases([])

    expect(actualNumberOfDepthIncreases).toBe(0)
  })

  it('should raise an error if a non-numeric line is encountered', () => {
    expect(() => {
      calculateNumberOfDepthIncreases([
        '100',
        'Foo',
        '102'
      ])
    }).toThrowError()
  })
})
