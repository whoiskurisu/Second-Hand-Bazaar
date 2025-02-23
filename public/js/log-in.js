// const iconClose = document.querySelector(".icon-close");

// function close() {
//   location.href = "./";
// }

// iconClose.addEventListener("click", close);

document.querySelector(".form-box").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch("/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.message == "Login successful") {
        window.location.href = "/home"; // Redirect to homepage after successful login
      } else {
        alert(data.message);  // Show error message if login failed
      }
    });

});
