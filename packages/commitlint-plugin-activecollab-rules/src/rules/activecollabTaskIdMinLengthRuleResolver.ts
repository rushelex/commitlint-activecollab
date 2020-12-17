import { parseCommitMessage, commitlintActivecollabConstants } from 'commitlint-activecollab-utils'

import { TRuleResolver } from '../../@types'

const activecollabTaskIdMinLengthRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintActivecollabConstants.TASK_ID_MIN_LENGTH,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const nonValidTaskId = commitMessage.commitTaskIds.find(taskId => taskId.length < value)

  const isRuleValid = !nonValidTaskId

  return [isRuleValid, `${nonValidTaskId} | Task ID must not be shorten than ${value} characters`]
}

export default activecollabTaskIdMinLengthRuleResolver
