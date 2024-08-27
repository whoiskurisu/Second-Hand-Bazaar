async function fetchData() {
  try {
    const productID = window.location.href.slice(-4);
    const itemValue = await fetch(`http://localhost:5000/api/products`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const Itemdata = await itemValue.json();

    const JSONofProduct = Itemdata.find((x) => x.id == productID);

    const title = document.querySelector("#title");
    title.textContent = JSONofProduct.name;
    const heading = document.querySelector("#product-heading");
    const status = document.querySelector("#status");
    const image = document.querySelector("#image");
    const price = document.querySelector("#price-value");

    heading.textContent = JSONofProduct.name;
    status.textContent = JSONofProduct.status.toUpperCase();
    status.setAttribute("class", JSONofProduct.status);
    image.style.backgroundImage = JSONofProduct.image;
    price.textContent = "रू." + JSONofProduct.price;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// async function postData(){
// try {
//   const btn = document.querySelector('#addToCart')
//   btn.addEventListener('onclick',()=>{

//   })
// } catch (error) {
//   console.log(error)
// }
// }

fetch("http://localhost:5000/", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ name: "kurisu" }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
