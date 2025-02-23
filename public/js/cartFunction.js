
const jwtCookie = document.cookie.split('=').pop();

// const decodedToken = jwtDecode(jwtCookie);
// const email = decodedToken.email
// console.log(jwtCookie)

fetchData();

async function fetchData() {
  try {
    const cartValue = await fetch(`http://localhost:5000/api/v1/cart/${email}`); 
    const productValue = await fetch(`http://localhost:5000/api/v1/products`);

    const cartData = await cartValue.json();
    const producData = await productValue.json();
    console.log(cartData)

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
        <span class="icon-close"><ion-icon name="trash-bin-outline"></ion-icon></span>
      </div>`;

      const deleteIcon = newDiv.querySelector(".icon-close");
      deleteIcon.addEventListener("click", () => removeFn(cartData[i]._id));

    }
  } catch (error) {
    console.error(error);
  }
}

async function removeFn(x) {
  try {
    location.reload();
    await axios.delete(`/api/v1/cart/${email}/${x}`);
  } catch (error) {
    console.log("Error");
  } 
}
