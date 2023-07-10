/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    console.log(countries);
    let html = `<option value="">Please select</option>`;
    html += countries
    .map((country) => `<option value="${country.toLowerCase()}">${country}</option>`)
    .join("\n");
    return html;

}
