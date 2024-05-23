const itemName = document.querySelector("#item-name-value");
const itemPrice = document.querySelector("#item-price-value");
// const itemColor = document.querySelector("#item-color-value");
const itemQuantity = document.querySelector("#item-quantity-value");

async function fetchData() {
  try {
    const itemColor = document.querySelector("#item-color-value");

    const itemValue = await fetch(`http://localhost:5000/api/cart`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const Itemdata = await itemValue.json();

    itemColor.textContent = Itemdata[0].Color;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
