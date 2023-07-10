/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    console.log(ages);
    return ages.filter(age => {
        return age >= 18;
    }).length;

}
