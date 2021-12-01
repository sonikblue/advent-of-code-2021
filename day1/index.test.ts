import generateMessage from './index'

describe('generateMessage', () => {
  it('Should return the expected message', () => {
    const actualMessage = generateMessage()

    expect(actualMessage).toBe('Hello world!')
  })
})
