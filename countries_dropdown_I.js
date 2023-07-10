/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  let options = '<option value="">Please select</option>';
  countries.forEach((country) => {
    options += `<option value="${country.toLowerCase()}">${country}</option>`;
  });
  return options;

}
