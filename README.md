# commitlint-activecollab
commitlint-activecollab checks if your commit messages meet the Active Collab conventional commit format.

## Getting started.

##### Install dependencies

```bash
// npm

$ npm install --save-dev @commitlint/cli commitlint-plugin-activecollab-rules commitlint-config-activecollab

// yarn

$ yarn add --dev @commitlint/cli commitlint-plugin-activecollab-rules commitlint-config-activecollab
```

- [commitlint-config-activecollab](https://github.com/Rushelex/commitlint-activecollab/tree/main/packages/commitlint-config-activecollab) - is a **recommended** config who contain preconfigured rules for Active Collab commits messages style. See all rules in description below.
- [commitlint-plugin-activecollab-rules](https://github.com/Rushelex/commitlint-activecollab/tree/main/packages/commitlint-plugin-activecollab-rules) - is a plugin that implement all Active Collab commits messages style rules and validate commit messages.

##### Configure commitlint to use Active Collab commits messages style config

```js
// commitlint.config.js

module.exports = {
  plugins: ['commitlint-plugin-activecollab-rules'],
  extends: ['activecollab'],
}
```

##### To lint commits before they are created you can use Husky's 'commit-msg' hook

```json
// package.json

{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Rules

`activecollab-task-id-empty` - this rule check if commit message task id is not empty.

```bash
// If your task do not have an id use a conventional task id e.g: #42
// ❌ Bad commit messages
$ git commit -m "My commit message body"
$ git commit -m ": My commit message body"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
```

`activecollab-task-id-max-length` - this rule check if Active Collab task id length is longer that the provided value.

```bash
// Preconfigured and recommended value in commitlint-config-activecollab is 5 chars
// ❌ Bad commit messages
$ git commit -m "#10101010101: My commit message body"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
$ git commit -m "#101: My commit message body"
```

`activecollab-task-id-min-length` - this rule check if Active Collab task id length is shorter that the provided value.

```bash
// Preconfigured and recommended value in commitlint-config-activecollab is 1 chars
// ❌ Bad commit messages
$ git commit -m "#: My commit message body"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
$ git commit -m "#101: My commit message body"
```

`activecollab-task-id-pattern` - this rule check if task ID header and footer is separated with provided value.

```bash
// Preconfigured and recommended value in commitlint-config-activecollab is "-"
// ❌ Bad commit messages
$ git commit -m "42 :My commit message body"
$ git commit -m "#-42: My commit message body"
$ git commit -m "# 42: My commit message body"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
$ git commit -m "#42: My commit message body"
```

`activecollab-commit-message-separator` - this rule check if commit message separator match provided separator.

```bash
// Preconfigured and recomended value in commitlint-config-activecollab is ":"
// ❌ Bad commit messages
$ git commit -m "#42/ My commit message body"
$ git commit -m "#42 - My commit message body"
$ git commit -m "#42 My commit message body"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
```

`activecollab-commit-status-case` - this rule check if commit status is in provided case.

```bash
// Preconfigured and recomended value in commitlint-config-activecollab is "uppercase"
// ❌ Bad commit messages
$ git commit -m "[wip]#42: My commit message body"
// ✅ Good commit messages
$ git commit -m "[WIP]#42: My commit message body"
```

`activecollab-commit-message-case` - this rule check if commit message is in provided case.

```bash
// Preconfigured and recomended value in commitlint-config-activecollab is "uppercase"
// ❌ Bad commit messages
$ git commit -m "#42: my commit message body"
$ git commit -m "#42: MY COMMIT MESSAGE BODY"
// ✅ Good commit messages
$ git commit -m "#42: My commit message body"
```

## Customise/Override `commitlint-activecollab-config` rules

```diff
// commitlint.config.js
module.exports = {
  plugins: ['commitlint-plugin-activecollab-rules'],
  extends: ['activecollab'],
  rules: {
  // to Customise/Override a rule
+  'activecollab-task-id-max-length': [2, 'always', 10]
  // to turn off a rule
+ 'activecollab-task-id-max-length': 0
  },
}
```

## Author

**[@Rushelex/commitlint-activecollab](https://github.com/Rushelex/commitlint-activecollab)** © [Rushelex](https://github.com/Gherciu), Released under the [MIT](https://github.com/Rushelex/commitlint-activecollab/blob/main/LICENSE) License.\

The project uses the work of user [Gherciu](https://github.com/Gherciu) and his project [commitlint-jira](https://github.com/Gherciu/commitlint-jira).
