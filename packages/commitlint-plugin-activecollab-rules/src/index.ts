import { commitlintActivecollabConstants } from 'commitlint-activecollab-utils'
import { CommitlintPluginActivecollab } from '../@types'
import activecollabTaskIdMaxLengthRuleResolver from './rules/activecollabTaskIdMaxLengthRuleResolver'
import activecollabTaskIdMinLengthRuleResolver from './rules/activecollabTaskIdMinLengthRuleResolver'
import activecollabTaskIdEmptyRuleResolver from './rules/activecollabTaskIdEmptyRuleResolver'
import activecollabTaskIdPatternRuleResolver from './rules/activecollabTaskIdPatternRuleResolver'
import activecollabCommitStatusCaseRuleResolver from './rules/activecollabCommitStatusCaseRuleResolver'
import activecollabCommitMessageCaseRuleResolver from './rules/activecollabCommitMessageCaseRuleResolver'
import activecollabCommitMessageSeparatorRuleResolver from './rules/activecollabCommitMessageSeparatorRuleResolver'

export const commitlintPluginActivecollab: CommitlintPluginActivecollab = {
  rules: {
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdEmpty]: activecollabTaskIdEmptyRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdMinLength]: activecollabTaskIdMinLengthRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdMaxLength]: activecollabTaskIdMaxLengthRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.taskIdPattern]: activecollabTaskIdPatternRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.commitStatusCase]: activecollabCommitStatusCaseRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES.commitMessageCase]: activecollabCommitMessageCaseRuleResolver,
    [commitlintActivecollabConstants.ACTIVECOLLAB_RULES
      .commitMessageSeparator]: activecollabCommitMessageSeparatorRuleResolver,
  },
}

export default commitlintPluginActivecollab
