## Commit Lint Demo Example

### Tham chiếu (Reference): 
* [Commit Lint Free Code Camp](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)
* [Conventional CommitLint Viblo](https://viblo.asia/p/ban-dang-viet-commit-message-nhu-the-nao-gDVK22A0KLj)
* [Conventional CommitLint](https://www.conventionalcommits.org/en/v1.0.0/#specification)
* [Angular Conventional Commit-Lint](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

### npm/npx | yarn Commands
* ```npx husky install``` : Cho phép (allow) husky hook & tạo ra .husky folder

* ``` npm set-script prepare "husky install"``` : Thêm dòng mới ```"prepare": "husky install"``` vào phần ```script``` trong file ```package.json```. Lần sau partner chạy npm install đỡ nhọc 

* ```npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"``` : Thêm 1 hook husky là "pre-commit" mà chạy trước khi code được commit, đồng thời tạo file shell commit-msg bên trong folder .husky.

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

### script (package.json) commands

* ```"test": "node test.js"``` : Khi chạy ```npm test``` thì chính là khởi động chạy ```node test.js```

* ```"start": "node index.js"``` : Khi chạy ```npm start``` thì chính là khởi động chạy ```node index.js```

