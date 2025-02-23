// Selecting values to send in req.body through POST method
const nameP = document.querySelector('#name');
const statusP = document.querySelector('#status');
const price = document.querySelector('#price');
const color = document.querySelector('#color');
const quantity = document.querySelector('#quantity-input');
const image = document.querySelector('#image');
const form = document.querySelector('#form');

// API call on Add Product button
form.addEventListener('submit', async event => {

  event.preventDefault();
  alert("Product has been added.");

 // Create FormData to send file & other values
 const formData = new FormData();
 formData.append("name", document.querySelector("#name").value);
 formData.append("status", document.querySelector("#status").value);
 formData.append("price", document.querySelector("#price").value);
 formData.append("color", document.querySelector("#color").value);
 formData.append("quantity", document.querySelector("#quantity-input").value);
 formData.append("productPic", document.querySelector("#image").files[0]); 

  await fetch("http://localhost:5000/api/v1/addProduct", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch(() => console.log("ERROR"));

}
)

