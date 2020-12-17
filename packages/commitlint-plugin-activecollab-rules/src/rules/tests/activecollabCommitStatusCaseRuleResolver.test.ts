import activecollabCommitStatusCaseRuleResolver from '../activecollabCommitStatusCaseRuleResolver'

describe('activecollabCommitStatusCaseRuleResolver', () => {
  it('should return a error response if commitStatus is not in provided case', () => {
    const parsed = {
      raw: '[wip]#42: My commit message',
    }
    expect(activecollabCommitStatusCaseRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if commitStatus is in provided case', () => {
    const parsed = {
      raw: '[WIP]#42: My commit message',
    }
    expect(activecollabCommitStatusCaseRuleResolver(parsed)[0]).toEqual(true)
  })
})
