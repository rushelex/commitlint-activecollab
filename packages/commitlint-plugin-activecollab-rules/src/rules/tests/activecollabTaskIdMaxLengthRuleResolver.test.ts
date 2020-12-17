import activecollabTaskIdMaxLengthRuleResolver from '../activecollabTaskIdMaxLengthRuleResolver'

describe('activecollabTaskIdMaxLengthRuleResolver', () => {
  it('should return a error response if taskIds length is longer that provided value', () => {
    const parsed = {
      raw: '#1010101: My commit message',
    }
    expect(activecollabTaskIdMaxLengthRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if taskIds length is not longer that provided value', () => {
    const parsed = {
      raw: '#10101: My commit message',
    }
    expect(activecollabTaskIdMaxLengthRuleResolver(parsed)[0]).toEqual(true)
  })
})
