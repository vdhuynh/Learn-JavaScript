/** @param {number[]} grades */
export const getNumberOfGrades = grades => grades.length
    // TODO: return the number of grades



/** @param {number[]} grades */
export const getSumGrades = (grades) => grades.reduce((acc, curr) => acc + curr, 0);
    // TODO: return the sum of all the grades



/** @param {number[]} grades */
export const getAverageValue = (grades) => grades.reduce((acc, curr) => acc + curr, 0)/grades.length;
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)



/** @param {number[]} grades */
export const getPassingGrades = grades => grades.filter(grade => grade >= 10);
    // TODO: return all passing grades (10 and above)



/** @param {number[]} grades */
export const getFailingGrades = grades => grades.filter(grade => grade <= 9); 
    // TODO: return all failing grades (9 and below)



/** @param {number[]} grades */
export const getRaisedGrades = grades => grades.map(grade => Math.min(grade + 1, 20))
    // TODO: return all the grades raised by 1 (grades should not exceed 20)


