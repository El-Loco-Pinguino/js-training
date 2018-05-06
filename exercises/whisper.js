'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = (str) => {
    return "*" + str.toLowerCase() + "*"
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper("BRUBRUBRUBRU"), "*brubrubrubru*")
assert.strictEqual(whisper("Pirlipirlipipi"), "*pirlipirlipipi*")
//assert.fail('You must write your own tests')
// End of tests */
