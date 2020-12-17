import { parseCommitMessage, commitlintActivecollabConstants } from 'commitlint-activecollab-utils'
import { TRuleResolver } from '../../@types'

const activecollabCommitMessageCaseRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintActivecollabConstants.SENTENCECASE,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)
  const commitSentences = commitMessage.commitFooter
    .split('.')
    .map((sentence: string) => sentence.trim())
    .filter((sentence: string) => !!sentence)

  let nonValidCommitMessage: false | string | undefined

  switch (value) {
    case commitlintActivecollabConstants.SENTENCECASE:
      nonValidCommitMessage = commitSentences.find(
        (sentence: string) =>
          sentence !== sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase(),
      )
      break
    case commitlintActivecollabConstants.LOWERCASE:
      nonValidCommitMessage = commitSentences.find(
        (sentence: string) => sentence !== sentence.toLowerCase(),
      )
      break
    default:
      nonValidCommitMessage = false
      break
  }

  const isRuleValid = !nonValidCommitMessage

  return [isRuleValid, `"${nonValidCommitMessage}" | Commit message must be ${value} case`]
}
export default activecollabCommitMessageCaseRuleResolver
