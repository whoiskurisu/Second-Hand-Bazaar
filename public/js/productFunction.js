async function fetchData() {
  try {
    const productID = window.location.href.slice(-4);
    const itemValue = await fetch(`http://localhost:5000/api/products`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const Itemdata = await itemValue.json();

    const JSONofProduct = Itemdata.find((x) => x.id == productID);

    const heading = document.querySelector("#product-heading");
    const status = document.querySelector("#status");
    const image = document.querySelector("#image");
    const price = document.querySelector("#price-value");

    heading.textContent = JSONofProduct.name;
    status.textContent = JSONofProduct.status.toUpperCase();
    status.setAttribute("class", JSONofProduct.status);
    image.style.backgroundImage = JSONofProduct.image;
    price.textContent = "रू." + JSONofProduct.price;

    //   for (let i = 8; i <= 15; i++) {
    //     const x = document.createElement("div");
    //     const contain = document.querySelector(".second-row");

    //     contain.prepend(x);
    //     x.setAttribute("class", "product-box");
    //     x.setAttribute("onclick", `location.href='/products/${Itemdata[i].id}'`);

    //     x.innerHTML = `<div class="second-row-image"></div>
    //       <div class="product-text">${Itemdata[i].name}</div>
    //         <b class="used">${Itemdata[i].status.toUpperCase()}</b>
    //         <b class="price">रू. ${Itemdata[i].price}</b>`;

    //     const image = document.querySelector(".second-row-image");
    //     image.style.backgroundImage = `${Itemdata[i].image}`;
    //   }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
