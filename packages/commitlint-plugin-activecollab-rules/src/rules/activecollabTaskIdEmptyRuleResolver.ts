import { parseCommitMessage, commitlintActivecollabConstants } from 'commitlint-activecollab-utils'
import { TRuleResolver } from '../../@types'

const activecollabTaskIdEmptyRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitTaskIds.length > 0
  return [
    isRuleValid,
    `The commit message must provide minimum one task id followed by "${commitlintActivecollabConstants.COMMIT_MESSAGE_SEPARATOR}" symbol e.g: "#42${commitlintActivecollabConstants.COMMIT_MESSAGE_SEPARATOR}My commit message"`,
  ]
}
export default activecollabTaskIdEmptyRuleResolver
