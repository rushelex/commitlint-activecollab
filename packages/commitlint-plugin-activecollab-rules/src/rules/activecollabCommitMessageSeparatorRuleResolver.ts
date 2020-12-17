import { commitlintActivecollabConstants } from 'commitlint-activecollab-utils'

import { TRuleResolver } from '../../@types'

const activecollabCommitMessageSeparatorRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintActivecollabConstants.COMMIT_MESSAGE_SEPARATOR,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  let isRuleValid = false

  const findedMatchingSeparators = rawCommitMessage.match(new RegExp(`${value}`, 'ig'))

  // check only first matching separator
  if (findedMatchingSeparators && findedMatchingSeparators[0]) isRuleValid = true

  return [
    isRuleValid,
    `Commit message parts must be separated with "${value}" e.g: #42${value}My commit message body`,
  ]
}
export default activecollabCommitMessageSeparatorRuleResolver
