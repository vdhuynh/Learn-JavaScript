/**
 * @param {object} data
 * @param {object} [data.results]
 * @param {number[]} [data.results.grades]
 */
const getFirstGrade = data => {
        return data?.results?.grades?.[0];
}

// Sample usage - do not modify
console.log(getFirstGrade({results: {grades:[ 18, 14, 19]}})); // 18
console.log(getFirstGrade({results: {}})); // undefined
console.log(getFirstGrade({})); // undefined
