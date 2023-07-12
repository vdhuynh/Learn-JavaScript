/**
 * @param {array} users
 * @param {number} userId
 */
const verifyUser = (users, userId) => {
    return users.find(user => user.id === userId).isVerified = true;
}


// Sample usage - do not modify
const users = [{
    id: 1,
    name: "Sam",
    isVerified: false
}, {
    id: 2,
    name: "Alex",
    isVerified: false
}, {
    id: 3,
    name: "Charlie",
    isVerified: false
}];
verifyUser(users, 2);
console.log(users); // notice that it gets mutated
