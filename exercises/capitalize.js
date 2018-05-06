'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
const capitalize = (str) => {
    let iteration = 0
    let result = ""
    for (let letter of str) {
        if (iteration === 0) {
            letter = letter.toUpperCase()
            result += letter
        } else {
            letter = letter.toLowerCase()
            result += letter
        }
        iteration++
    }
    return result
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
