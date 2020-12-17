export interface Rules {
  commitStatusCase: string
  commitMessageCase: string
  taskIdEmpty: string
  taskIdPattern: string
  taskIdMaxLength: string
  taskIdMinLength: string
  commitMessageSeparator: string
}

export interface TCommitlintActivecollabConstants {
  ACTIVECOLLAB_RULES: Rules
  COMMIT_MESSAGE_SEPARATOR: string
  COMMIT_TASK_IDS_SEPARATOR: string
  COMMIT_TASK_STATUS_PATTERN: RegExp
  TASK_ID_MIN_LENGTH: number
  TASK_ID_MAX_LENGTH: number
  TASK_ID_PATTERN: string
  COMMIT_STATUS_SEPARATORS: {
    start: string
    end: string
  }
  UPPERCASE: string
  LOWERCASE: string
  SENTENCECASE: string
  COMMIT_DESCRIPTION_SEPARATOR: string
}

export type TParseCommitMessage = (
  commitMessage: string,
) => {
  commitTaskIds: string[]
  commitHeader: string
  commitFooter: string
  commitStatus: string
}

export interface CommitlintActivecollabUtils {
  parseCommitMessage: TParseCommitMessage
  commitlintActivecollabConstants: TCommitlintActivecollabConstants
}

export const commitlintActivecollabConstants: TCommitlintActivecollabConstants
export const parseCommitMessage: TParseCommitMessage

declare const commitlintActivecollabUtils: CommitlintActivecollabUtils
export default commitlintActivecollabUtils
