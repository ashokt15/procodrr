const form = document.getElementById("entryForm");
const tableBody = document.querySelector("#dataTable tbody");
let rowCount = 1;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (name && age) {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
      <td>${rowCount++}</td>
      <td>${name}</td>
      <td>${age}</td>
    `;

        tableBody.appendChild(newRow);
        form.reset();
    }
});
