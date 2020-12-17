import * as commitlintActivecollabConstants from './commitlintActivecollabConstants'
import parseCommitMessage from './parseCommitMessage'
import { CommitlintActivecollabUtils } from '../@types'

const commitlintActivecollabUtils: CommitlintActivecollabUtils = {
  commitlintActivecollabConstants,
  parseCommitMessage,
}

export { commitlintActivecollabConstants, parseCommitMessage }
export default commitlintActivecollabUtils
