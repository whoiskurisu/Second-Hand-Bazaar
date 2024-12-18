async function fetchData() {
    try {
      const wishlistValue = await fetch(`http://localhost:5000/api/v1/wishlist`);
      const productValue = await fetch(`http://localhost:5000/api/v1/products`);
  
      const wishlistData = await wishlistValue.json();
      const producData = await productValue.json();
  
      for (let i = 0; i < wishlistData.length; i++) {
        const newDiv = document.createElement("div");
        const contain = document.querySelector("#wishlist-container");
  
        contain.append(newDiv);
        newDiv.setAttribute("class", "wishlist-items");
        let JSONofProduct = producData.find((x) => x.id == wishlistData[i].id);
  
        newDiv.innerHTML = `
        <div class="item-image" style="background-image: ${
          JSONofProduct.image
        }"></div>
        <div class="item-details" id="${wishlistData[i].id}">
          <div class="item-name">Name : <span class='item-name-value'>${
            JSONofProduct.name
          }</span></div>
          <div class="item-price">
            Price : रू.${JSONofProduct.price}
          </div>
          <div class="item-color">
            Color : ${wishlistData[i].color}
          </div>
          <div class="item-quantity">
            Quantity : ${wishlistData[i].quantity}
          </div>
          <div class="item-status">
            Status : <span class="${
              JSONofProduct.status
            }">${JSONofProduct.status.toUpperCase()}</span>
          </div>
          <span class="icon-close" onclick="
            removeFn('${wishlistData[i]._id}')
  
          "><ion-icon name="trash-bin-outline"></ion-icon></span>
        </div>`;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  
  async function removeFn(x) {
    try {
      location.reload();
      await axios.delete(`/api/v1/wishlist/${x}`);
    } catch (error) {
      console.log("Error");
    } 
  }
  