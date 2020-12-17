import activecollabTaskIdPatternRuleResolver from '../activecollabTaskIdPatternRuleResolver'

describe('activecollabTaskIdPatternRuleResolver', () => {
  it('should return a error response if taskIds separator is incorrect', () => {
    const parsed = {
      raw: '42: My commit message',
    }
    expect(activecollabTaskIdPatternRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if taskIds separator is correct', () => {
    const parsed = {
      raw: '#42: My commit message',
    }
    expect(activecollabTaskIdPatternRuleResolver(parsed)[0]).toEqual(true)
  })
})
