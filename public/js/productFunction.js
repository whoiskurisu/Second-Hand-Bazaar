// Front-end validators not working when add to cart/wishlist without input 

async function fetchData() {
  try {
    const productID = window.location.href.split('/').pop();
    const itemValue = await fetch(`http://localhost:5000/api/v1/products/${productID}`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const itemData = await itemValue.json();

    const title = document.querySelector("#title");
    title.textContent = itemData.name;
    const heading = document.querySelector("#product-heading");
    const status = document.querySelector("#status");
    const image = document.querySelector("#image");
    const price = document.querySelector("#price-value");

    heading.textContent = itemData.name;
    status.textContent = itemData.status.toUpperCase();
    status.setAttribute("class", itemData.status);
    image.style.backgroundImage = itemData.image;
    price.textContent = "रू." + itemData.price;
  } catch (error) {
    console.error(error);
  }
}

fetchData();


// Selecting values to send in req.body through POST method
const color = document.querySelector('#color-input');
const quantity = document.querySelector('#quantity-input');
const address = document.querySelector('#delivery-input');
const district = document.querySelector('#delivery-select');

// API call on Add To Cart button
const form1 = document.querySelector('#form1');

form1.addEventListener('submit', async event => { 
  
  event.preventDefault(); // Do not know if there is any default events
  
  const data = {
    'id': window.location.href.substring(window.location.href.length - 4),
    'color': color.value,
    'quantity': quantity.value,
    'address': address.value,
    'district': district.value
  };
  
  const clickedButton = event.submitter; // This gets the button that triggered the submit
  const action = clickedButton.value;    // 'add_to_cart' or 'add_to_wishlist'

  if (action == 'add_to_cart') {
    alert("Added to cart successfully");

await fetch("http://localhost:5000/api/v1/cart", {
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
  else if (action == 'add_to_wishlist') {
    alert("Added to wishlist successfully");
    await fetch("http://localhost:5000/api/v1/wishlist", {
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
}
)

// API call on Add To Wishlist button
// const form2 = document.querySelector('#form2  ')

// form2.addEventListener('submit', async event =>{

//   event.preventDefault();
  
  
//   const data = {
//     'id': window.location.href.substring(window.location.href.length - 4),
//     'color': color.value,
//     'quantity': quantity.value,
//     'address': address.value,
//     'district': district.value
//   };
  
  


// })
