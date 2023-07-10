/**
 * @param {string} age
 */
export function getNextAge(age) {
    return age == "" ? 0: Number.parseInt(age, 10) + 1;
}
