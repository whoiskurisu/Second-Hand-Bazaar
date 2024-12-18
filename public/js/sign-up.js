const iconClose = document.querySelector(".icon-close");

function close() {
  location.href = "/";
}
iconClose.addEventListener("click", close);

// Selecting values to send in req.body through POST method
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

// API call on Sign up button
const form = document.querySelector('#form');

form.addEventListener('submit', async event => {

  event.preventDefault();

  const data = {
    'FirstName': fname.value,
    'LastName': lname.value,
    'Email': email.value,
    'Password': password.value,
  };

  if(password.value != cpassword.value){
    alert("Passwords do not match")
    return;
  }
  
  alert("Signed up successfully"); // Pop up for successful sign up

    await fetch("http://localhost:5000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // We have defined res.json with success: true
        if (data.success) {
        window.location.href = '/login'; // Redirect on the client side
}})
      .catch(() => console.log("ERROR"));
  }
)