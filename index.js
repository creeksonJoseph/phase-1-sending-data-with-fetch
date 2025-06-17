function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Append the ID to the DOM
      const body = document.querySelector("body");
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${data.id}`;
      body.appendChild(idElement);
    })
    .catch((error) => {
      // Handle any errors
      const body = document.querySelector("body");
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      body.appendChild(errorElement);
    });
}
