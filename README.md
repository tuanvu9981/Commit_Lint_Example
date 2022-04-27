## Commit Lint Demo Example

### Reference
* [Commit Lint Free Code Camp](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)

### Commands
* ```npx husky install```: Allow the husky hook & create .husky folder

* ``` npm set-script prepare "husky install"```: Add new line ```"prepare": "husky install"``` to ```script``` in ```package.json``` file.

* ```npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"```: adds a husky pre-commit hook that will run before the code is committed, (+create shell file commit-msg inside .husky folder)



