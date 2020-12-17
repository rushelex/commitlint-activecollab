import activecollabTaskIdEmptyRuleResolver from '../activecollabTaskIdEmptyRuleResolver'

describe('activecollabTaskIdEmptyRuleResolver', () => {
  it('should return a error response if taskIds is empty', () => {
    const parsed = {
      raw: ': My commit message',
    }
    expect(activecollabTaskIdEmptyRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if taskIds is not empty', () => {
    const parsed = {
      raw: '#42: My commit message',
    }
    expect(activecollabTaskIdEmptyRuleResolver(parsed)[0]).toEqual(true)
  })
})
