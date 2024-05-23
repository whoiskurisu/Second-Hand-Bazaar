async function fetchData() {
  try {
    const itemValue = await fetch(`http://localhost:5000/api/products`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const Itemdata = await itemValue.json();

    // For First Row

    for (let i = 0; i <= 7; i++) {
      const x = document.createElement("div");
      const contain = document.querySelector(".first-row");

      contain.prepend(x);
      x.setAttribute("class", "product-box");
      x.setAttribute("onclick", `location.href='/products/${Itemdata[i].id}'`);

      x.innerHTML = `<div class="first-row-image"></div>
      <div class="product-text">${Itemdata[i].name}</div>
        <b class="${Itemdata[i].status}">${Itemdata[i].status.toUpperCase()}</b>
        <b class="price">रू. ${Itemdata[i].price}</b>`;

      const image = document.querySelector(".first-row-image");
      image.style.backgroundImage = `${Itemdata[i].image}`;
    }

    // For Second Row

    for (let i = 8; i <= 15; i++) {
      const x = document.createElement("div");
      const contain = document.querySelector(".second-row");

      contain.prepend(x);
      x.setAttribute("class", "product-box");
      x.setAttribute("onclick", `location.href='/products/${Itemdata[i].id}'`);

      x.innerHTML = `<div class="second-row-image"></div>
        <div class="product-text">${Itemdata[i].name}</div>
          <b class="used">${Itemdata[i].status.toUpperCase()}</b>
          <b class="price">रू. ${Itemdata[i].price}</b>`;

      const image = document.querySelector(".second-row-image");
      image.style.backgroundImage = `${Itemdata[i].image}`;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
