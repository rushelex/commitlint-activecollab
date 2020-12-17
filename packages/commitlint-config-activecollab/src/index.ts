import { commitlintActivecollabConstants } from 'commitlint-activecollab-utils'
import { CommitlintConfigActivecollab } from '../@types'

export const commitlintConfigActivecollab: CommitlintConfigActivecollab = {
  rules: {
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.commitMessageSeparator]: [
      2,
      'always',
      commitlintActivecollabConstants.COMMIT_MESSAGE_SEPARATOR,
    ],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdEmpty]: [2, 'always'],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdPattern]: [
      2,
      'always',
      commitlintActivecollabConstants.TASK_ID_PATTERN,
    ],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdMinLength]: [
      2,
      'always',
      commitlintActivecollabConstants.TASK_ID_MIN_LENGTH + 1,
    ],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdMaxLength]: [
      2,
      'always',
      commitlintActivecollabConstants.TASK_ID_MAX_LENGTH,
    ],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.commitStatusCase]: [
      2,
      'always',
      commitlintActivecollabConstants.UPPERCASE,
    ],
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.commitMessageCase]: [
      2,
      'always',
      commitlintActivecollabConstants.SENTENCECASE,
    ],
  },
}

export default commitlintConfigActivecollab
