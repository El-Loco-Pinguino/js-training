'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
const multiply = (x, y) => {
    const resultSign = (x < 0) ?
                     (y > 0) ? -1 : 1 
                     :
                     (y < 0) ? -1 : 1
  
    x = volvAbs(x)
    y = volvAbs(y)
  
    const doMult = (x, y) => {
      if (y === 0) return 0
      return x + doMult(x, y - 1)
    }
    return (resultSign === 1) ? doMult(x, y) : -doMult(x, y);
  }
  
  const volvAbs = (x) => {
    return (x < 0) ? -x : x
  }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
