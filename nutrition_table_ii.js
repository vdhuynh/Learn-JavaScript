/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {

    let html = '';
  rows.forEach((row) => {
    const [label, value] = row;
    html += `<tr>
      <td>${label} here</td>
      <td>${value} here</td>
    </tr>`;
  });
  return html;

}
