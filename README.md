## Commit Lint Demo Example

### Reference
* [Commit Lint Free Code Camp](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)
* [Conventional CommitLint Viblo](https://viblo.asia/p/ban-dang-viet-commit-message-nhu-the-nao-gDVK22A0KLj)
* [Conventional CommitLint](https://www.conventionalcommits.org/en/v1.0.0/#specification)
* [Angular Conventional Commit-Lint](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

### Commands
* ```npx husky install```: Allow the husky hook & create .husky folder

* ``` npm set-script prepare "husky install"```: Add new line ```"prepare": "husky install"``` to ```script``` in ```package.json``` file.

* ```npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"```: adds a husky pre-commit hook that will run before the code is committed, (+create shell file commit-msg inside .husky folder)

* Định nghĩa các type mà cho phép push/commit lên github 
```
rules: {
        "type-enum": [2, "always", [
            "build", "chore", "ci", "docs",
            "feat", "fix", "perf", "refactor",
            "revert", "style", "test", "button"
        ]]
    }
```

