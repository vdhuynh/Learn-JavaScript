/**
 * @param {string[]} user
 */
const getFullName = user => {
    const [firstName, lastName] = user;
    return user.join(" ");
}

// Sample usage - do not modify
console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
console.log(getFullName(["Alex", "Green"])); // "Alex Green"
