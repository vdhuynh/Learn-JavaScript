/**
 * @param {number[]} grades
 */ 
function sumGrades(grades) {
    let total = 0;
    grades.forEach(grade => {
        total += grade;
    });
    return total;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
