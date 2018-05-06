'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (str) => {
    str = str.substr(0, 2)
    return str
}

const keepLast = (str) => {
    str = str.substr(str.length - 2, str.length - 1)
    return str
}

const keepFirstLast = (str) => {
    str = str.substr(2, 2)
    return str
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst("ABCDEFG"), "AB")
assert.strictEqual(keepLast("ABCDEFG"), "FG")
assert.strictEqual(keepFirstLast("ABCDEFG"), "CD")
//assert.fail('You must write your own tests')
// End of tests */
