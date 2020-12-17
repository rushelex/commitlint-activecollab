import activecollabCommitMessageSeparatorRuleResolver from '../activecollabCommitMessageSeparatorRuleResolver'

describe('activecollabCommitMessageSeparatorRuleResolver', () => {
  it('should return a error response if commitMessageSeparator not match provided separator', () => {
    const parsed = {
      raw: '#42/ My commit message',
    }
    expect(activecollabCommitMessageSeparatorRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if commitMessageSeparator match provided separator', () => {
    const parsed = {
      raw: '#42: My commit message',
    }
    expect(activecollabCommitMessageSeparatorRuleResolver(parsed)[0]).toEqual(true)
  })
})
