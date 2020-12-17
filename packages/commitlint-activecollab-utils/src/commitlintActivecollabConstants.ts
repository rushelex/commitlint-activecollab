export const ACTIVECOLLAB_RULES = {
  commitStatusCase: 'activecollab-commit-status-case',
  commitMessageCase: 'activecollab-commit-message-case',
  taskIdPattern: 'activecollab-task-id-pattern',
  taskIdEmpty: 'activecollab-task-id-empty',
  taskIdMaxLength: 'activecollab-task-id-max-length',
  taskIdMinLength: 'activecollab-task-id-min-length',
  commitMessageSeparator: 'activecollab-commit-message-separator',
}

export const COMMIT_MESSAGE_SEPARATOR = ': '
export const COMMIT_TASK_IDS_SEPARATOR = ', '
export const COMMIT_TASK_STATUS_PATTERN = /\[.*\]/gi
export const TASK_ID_MIN_LENGTH = 1
export const TASK_ID_MAX_LENGTH = 5
export const TASK_ID_PATTERN = `^#[1-9]+$`
export const COMMIT_STATUS_SEPARATORS = {
  start: '[',
  end: ']',
}
export const UPPERCASE = 'uppercase'
export const LOWERCASE = 'lowercase'
export const SENTENCECASE = 'sentencecase'
export const COMMIT_DESCRIPTION_SEPARATOR = '\n'
