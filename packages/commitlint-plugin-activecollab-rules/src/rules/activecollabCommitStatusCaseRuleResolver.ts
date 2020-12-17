import { parseCommitMessage, commitlintActivecollabConstants } from 'commitlint-activecollab-utils'
import { TRuleResolver } from '../../@types'

const activecollabCommitStatusCaseRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintActivecollabConstants.UPPERCASE,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  if (!commitMessage.commitStatus) return [true]

  let isRuleValid = false

  if (
    value === commitlintActivecollabConstants.UPPERCASE &&
    commitMessage.commitStatus === commitMessage.commitStatus.toUpperCase()
  )
    isRuleValid = true
  if (
    value === commitlintActivecollabConstants.LOWERCASE &&
    commitMessage.commitStatus === commitMessage.commitStatus.toLowerCase()
  )
    isRuleValid = true

  return [isRuleValid, `${commitMessage.commitStatus} | Commit status must be ${value} case`]
}
export default activecollabCommitStatusCaseRuleResolver
