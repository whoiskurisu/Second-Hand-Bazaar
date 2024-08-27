async function fetchData() {
  try {
    const cartValue = await fetch(`http://localhost:5000/api/cart`);
    const productValue = await fetch(`http://localhost:5000/api/products`);

    const cartData = await cartValue.json();
    const producData = await productValue.json();

    for (let i = 0; i < cartData.length; i++) {
      const newDiv = document.createElement("div");
      const contain = document.querySelector("#cart-container");

      contain.append(newDiv);
      newDiv.setAttribute("class", "cart-items");
      let JSONofProduct = producData.find((x) => x.id == cartData[i].id);

      newDiv.innerHTML = `
      <div class="item-image" style="background-image: ${
        JSONofProduct.image
      }"></div>
      <div class="item-details" id="${cartData[i].id}">
        <div class="item-name">Name : <span class='item-name-value'>${
          JSONofProduct.name
        }</span></div>
        <div class="item-price">
          Price : रू.${JSONofProduct.price}
        </div>
        <div class="item-color">
          Color : ${cartData[i].color}
        </div>
        <div class="item-quantity">
          Quantity : ${cartData[i].quantity}
        </div>
        <div class="item-status">
          Status : <span class="${
            JSONofProduct.status
          }">${JSONofProduct.status.toUpperCase()}</span>
        </div>
        <span class="icon-close" onclick="
          removeFn('${JSONofProduct.id}','${JSONofProduct.name}')

        "><ion-icon name="trash-bin-outline"></ion-icon></span>
      </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();

async function removeFn(x, y) {
  const container = document.querySelectorAll(".cart-items");

  for (let i = 0; i < container.length; i++) {
    if (container[i].textContent.includes(y)) {
      container[i].remove();
    }
  }

  try {
    await axios.patch("/cart", {
      id: x,
    });
  } catch (error) {
    console.log("Error");
  }
}
