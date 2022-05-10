## Commit Lint Demo Example

### Tham chiếu (Reference): 
* [Commit Lint Free Code Camp](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)
* [Conventional CommitLint Viblo](https://viblo.asia/p/ban-dang-viet-commit-message-nhu-the-nao-gDVK22A0KLj)
* [Conventional CommitLint](https://www.conventionalcommits.org/en/v1.0.0/#specification)
* [Angular Conventional Commit-Lint](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
* [Automatic Release - CircleCi](https://circleci.com/blog/automating-your-releases-with-circleci-and-the-github-cli-orb/)

### npm/npx | yarn Commands
* ```npx husky install``` : Cho phép (allow) husky hook & tạo ra .husky folder

* ``` npm set-script prepare "husky install"``` : Thêm dòng mới ```"prepare": "husky install"``` vào phần ```script``` trong file ```package.json```. Lần sau partner chạy npm install đỡ nhọc 

* ```npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"``` :
    * Thêm 1 hook husky là "pre-commit" mà chạy trước khi code được commit, đồng thời tạo file shell commit-msg bên trong folder .husky. 
    * Lấy ra commit message của cái commit gần đấy nhất 

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

### Naming (Cách đặt tên)
* Lưu ý khi đặt tên virtual environment ảo trong .circleci/config.yml sao cho trùng tên với path khi import/export/require module nào đó. **Nếu đặt tên khác nhau → có khả năng xuất hiện lỗi đường dẫn/file không tồn tại** 
* Cách tốt nhất là đặt tên trùng luôn với tên repository

### Lưu ý về Git 
* Ở branch mới của mình, trước khi làm gì đó, phải pull code từ origin remote về, cả nhánh feature, nhánh tên mình, nhánh master trên local. Đảm bảo khớp với remote nhất có thể.
--> Khi đó, checkout sang 1 branch mới sẽ ít lỗi hơn
* [Một số lưu ý git khi làm việc nhóm](https://viblo.asia/p/quy-trinh-lam-viec-chuan-chi-voi-git-eW65G10RZDO)

### Orbs:
1. [yaml-lint orbs](https://circleci.com/developer/orbs/orb/freighthub/yamllint)
2. [commit-lint orbs](https://circleci.com/developer/orbs/orb/conventional-changelog/commitlint)
3. [auto release](https://circleci.com/developer/orbs/orb/circleci/github-cli)


### Các key được cho phép trong CircleCI config
    - description
    - parallelism
    - macos
    - resource_class
    - docker
    - steps
    - working_directory
    - circleci_ip_ranges
    - machine
    - environment
    - executor
    - shell
    - parameters 