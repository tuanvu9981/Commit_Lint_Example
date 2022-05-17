const subtract = require('../index').subtract;

const errMsg = "Test: FAILED";
const successMsg = "All: PASSED!";

var result1 = subtract(9, 6);
if (result1 != 3) {
    throw new Error(errMsg);
}

var result2 = subtract(11, 5);
if (result2 != 6) {
    throw new Error(errMsg);
}

let result4 = subtract(7, 9);
if (result4 != -2) {
    throw new Error(errMsg);
} else console.log(successMsg);
