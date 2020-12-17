import activecollabCommitMessageCaseRuleResolver from '../activecollabCommitMessageCaseRuleResolver'

describe('activecollabCommitMessageCaseRuleResolver', () => {
  it('should return a error response if commitMessage is not in provided case', () => {
    const parsed = {
      raw: '#42: my commit message',
    }
    expect(activecollabCommitMessageCaseRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if commitMessage is in provided case', () => {
    const parsed = {
      raw: '#42: My commit message',
    }
    expect(activecollabCommitMessageCaseRuleResolver(parsed)[0]).toEqual(true)
  })
})
