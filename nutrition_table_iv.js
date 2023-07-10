/**
 * @param {array[][]} rows
 */
export const renderTableRows = (rows) => {
  let html = rows
    .map(
      (row) => `<tr>
    <td>${row[0]}</td>
    <td>${row[1]}</td>
</tr>`
    )
    .join("");
  return html;
};
