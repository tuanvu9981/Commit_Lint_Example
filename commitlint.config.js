module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        "type-enum": [2, "always", [
            "build", "chore", "ci", "docs",
            "feat", "fix", "perf", "autogen", "refactor",
            "revert", "style", "test", "button"
        ]]
    }
}