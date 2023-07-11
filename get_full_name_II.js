/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = user => {
    return user.info?.name;
}

// Sample usage - do not modify
console.log(getFullName({info: {name: "Sam"}})); // "Sam"
console.log(getFullName({info: null})); // undefined
console.log(getFullName({})); // undefined
