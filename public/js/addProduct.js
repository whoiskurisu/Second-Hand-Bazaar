// Selecting values to send in req.body through POST method
const nameP = document.querySelector('#name');
const statusP = document.querySelector('#status');
const price = document.querySelector('#price');
const color = document.querySelector('#color');
const quantity = document.querySelector('#quantity-input');
const image = document.querySelector('#image');

// API call on Add Product button
form.addEventListener('submit', async event => {

  event.preventDefault();
  alert("Product has been added.");

  const data = {
    'name': nameP.value,
    'status': statusP.value,
    'price': price.value,
    'color': color.value,
    'quantity': quantity.value,
    'image': image.value,
  };

  await fetch("http://localhost:5000/api/v1/addProduct", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch(() => console.log("ERROR"));

}
)

