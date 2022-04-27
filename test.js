const add = require('../commitlint_example/index').add;

const errMsg = "Test: FAILED"

var result1 = add(5, 6);
if (result1 != 11) {
    throw new Error(errMsg);
}

var result2 = add(4, 5);
if (result2 != 9) {
    throw new Error(errMsg);
}

var result3 = add(6, 7);
if (result3 != 12) {
    throw new Error(errMsg);
} else console.log("All: PASSED!");