/**
 * @param {string} text
 */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.length > 10 ? text.substring(0, 10) + "...": text.substring(0,10);

}
