'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = (str) => {
    str = str.substr(2, str.length)
    return str
}

const cutLast = (str) => {
    str = str.substr(0, str.length - 2)
    return str
}

const cutFirstLast = (str) => {
    str = str.substr(2, str.length)
    str = str.substr(0, str.length - 2)
    return str
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst("Bonjour"), "njour")
assert.strictEqual(cutLast("Bonjour"), "Bonjo")
assert.strictEqual(cutFirstLast("Bonjour"), "njo")

//assert.fail('You must write your own tests')
// End of tests */
