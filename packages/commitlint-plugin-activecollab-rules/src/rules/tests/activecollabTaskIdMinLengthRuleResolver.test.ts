import activecollabTaskIdMinLengthRuleResolver from '../activecollabTaskIdMinLengthRuleResolver'

describe('activecollabTaskIdMinLengthRuleResolver', () => {
  it('should return a error response if taskIds length is shorten that provided value', () => {
    const parsed = {
      raw: '#: My commit message',
    }
    expect(activecollabTaskIdMinLengthRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if taskIds length is not shorten that provided value', () => {
    const parsed = {
      raw: '#42: My commit message',
    }
    expect(activecollabTaskIdMinLengthRuleResolver(parsed)[0]).toEqual(true)
  })
})
