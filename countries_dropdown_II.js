/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    let html = `<option value="">Please select</option>`;
    countries.forEach(country => {
        html += `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    return html;
};
