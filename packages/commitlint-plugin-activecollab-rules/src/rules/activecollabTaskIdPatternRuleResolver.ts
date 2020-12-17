import { parseCommitMessage, commitlintActivecollabConstants } from 'commitlint-activecollab-utils'

import { TRuleResolver } from '../../@types'

const activecollabTaskIdPatternRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const nonValidTaskId = commitMessage.commitTaskIds.find(taskId => {
    return !new RegExp(commitlintActivecollabConstants.TASK_ID_PATTERN).test(taskId)
  })

  const isRuleValid = !nonValidTaskId

  return [isRuleValid, `${nonValidTaskId} | Task ID must be valid e.g: #42`]
}
export default activecollabTaskIdPatternRuleResolver
