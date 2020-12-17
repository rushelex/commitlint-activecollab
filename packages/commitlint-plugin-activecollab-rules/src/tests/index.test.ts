import commitlintPluginActivecollab from '../index'

describe('commitlintPluginActivecollab', () => {
  it('should return a valid config', () => {
    expect(commitlintPluginActivecollab).toHaveProperty('rules')
    expect(Object.keys(commitlintPluginActivecollab.rules).length).toBeGreaterThan(0)
  })
})
