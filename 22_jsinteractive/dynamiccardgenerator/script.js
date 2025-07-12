const form = document.getElementById("cardForm");
const container = document.getElementById("cardContainer");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const title = document.getElementById("title").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && title && message) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <h3>${title}</h3>
      <h4>By: ${name}</h4>
      <p>${message}</p>
    `;
        container.appendChild(card);
        form.reset();
    }
});
