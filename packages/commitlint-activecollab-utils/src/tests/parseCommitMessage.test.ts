import parseCommitMessage from '../parseCommitMessage'

describe('commitlintPluginActivecollabTests', () => {
  const testCommitMessages = {
    singleScope: '#42: test commit message',
    multiScope: '#42, #101: test commit message',
    singleScopeWipTask: '[WIP]#42: test commit message',
    multiScopeWipTask: '[WIP]#42, #101: test commit message',
    emptyTaskIds: ': my commit message',
    missingSeparator: '#101 My commit message',
    multiCommitPartsSeparator: '#42: test commit message http://github.com/rushelex/',
    multiLineCommit: `
      #42: Test commit message
      My commit message description
        - SUBTASK-1: I added a new feature
        * SUBTASK-2: I fixed a issue
    `,
  }

  it('should return correct commitTaskIds', () => {
    expect(parseCommitMessage(testCommitMessages.singleScope).commitTaskIds).toEqual(['#42'])
    expect(parseCommitMessage(testCommitMessages.singleScopeWipTask).commitTaskIds).toEqual(['#42'])
    expect(parseCommitMessage(testCommitMessages.multiScope).commitTaskIds).toEqual(['#42', '#101'])
    expect(parseCommitMessage(testCommitMessages.multiScopeWipTask).commitTaskIds).toEqual([
      '#42',
      '#101',
    ])
  })

  it('should return correct commitFooter', () => {
    expect(parseCommitMessage(testCommitMessages.singleScope).commitFooter).toEqual(
      'test commit message',
    )
  })

  it('should return correct commitStatus', () => {
    expect(parseCommitMessage(testCommitMessages.singleScopeWipTask).commitStatus).toEqual('WIP')
    expect(parseCommitMessage(testCommitMessages.multiScopeWipTask).commitStatus).toEqual('WIP')
  })

  it('should return empty array of taskIds', () => {
    expect(parseCommitMessage(testCommitMessages.emptyTaskIds).commitTaskIds).toEqual([])
    expect(parseCommitMessage(testCommitMessages.missingSeparator).commitTaskIds).toEqual([])
  })

  it('should return corect taskIds and commit footer if a url is added in commit message or multiple commit status separators', () => {
    expect(parseCommitMessage(testCommitMessages.multiCommitPartsSeparator).commitTaskIds).toEqual([
      '#42',
    ])
    expect(parseCommitMessage(testCommitMessages.multiCommitPartsSeparator).commitFooter).toEqual(
      'test commit message http://gherciu.github.io',
    )
  })

  it('should return corect taskIds and commit footer if is provided a multiline commit message used for description', () => {
    expect(parseCommitMessage(testCommitMessages.multiLineCommit).commitTaskIds).toEqual(['#42'])
    expect(parseCommitMessage(testCommitMessages.multiLineCommit).commitFooter).toEqual(
      'test commit message',
    )
  })
})
