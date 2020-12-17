import commitlintConfigActivecollab from '../index'

describe('commitlintConfigActivecollab', () => {
  it('should return a valid config', () => {
    expect(commitlintConfigActivecollab).toHaveProperty('rules')
    expect(Object.keys(commitlintConfigActivecollab.rules).length).toBeGreaterThan(0)
  })
})
