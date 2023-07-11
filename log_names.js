/**
 * @param {Object[]} users
 * @param {number} users.id
 * @param {string} users.firstName
 * @param {string} users.lastName
 */
const logNames = users => {
    users.forEach(users => console.log(users.firstName + " " + users.lastName));
}

// Sample usage - do not modify
const sampleUsers = [{
    id: 1,
    firstName: "Sam",
    lastName: "Green"
}, {
    id: 2,
    firstName: "Alex",
    lastName: "Blue"
}];
logNames(sampleUsers); // logs: "Sam Green" and "Alex Blue"
