/**
 * @param {number[]} numbers
 */
const multiplyNumbers = numbers => {
    return numbers.reduce((acc, curr) => acc * curr, 1)
}

// Sample usage - do not modify
console.log(multiplyNumbers([10, 20, 30])) // 6000
console.log(multiplyNumbers([2, 4, 2, 10])) // 160
