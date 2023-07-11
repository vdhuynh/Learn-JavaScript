/**
 * @param {Object[]} recordings
 * @param {number} recordings.value
 */
const getProduct = recordings => recordings.reduce((acc, curr) => acc * curr.value, 1);

// Sample usage - do not modify
const sampleRecordings = [{
    value: 2,
}, {
    value: 5
}];
console.log(getProduct(sampleRecordings)); // 10
