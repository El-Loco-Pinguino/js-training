'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (str) => {
    let strGroup = str.split(" ")
    let result = ""
    for (let word of strGroup) {
        let iteration = 0
        for (let letter of word) {
            if (iteration === 0) {
                letter = letter.toUpperCase()
                result += letter
            } else {
                letter = letter.toLowerCase()
                result += letter
            }
            iteration++
        }
        result += " "
    }
    result = result.substr(0, result.length - 1)
    return result
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("poulet poulet poulet"), "Poulet Poulet Poulet")
assert.strictEqual(jadenCase("bOEUF bOEUF bOEUF"), "Boeuf Boeuf Boeuf")

//assert.fail('You must write your own tests')
// End of tests */
