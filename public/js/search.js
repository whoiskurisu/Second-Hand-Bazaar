async function fetchData() {
  try {
    const searchedValue = decodeURIComponent(window.location.href).split('=').pop();

    const youSearchedDOM = document.querySelector("#searchDesc");
    youSearchedDOM.textContent = `You searched for '${searchedValue}'`;

    const itemValue = await fetch(`http://localhost:5000/api/v1/products?search=${searchedValue}`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }

    const Itemdata = await itemValue.json();

    for (let i in Itemdata) {

      const newDiv = document.createElement("div");
      const contain = document.querySelector(".searchContainer");

      contain.append(newDiv);
      newDiv.setAttribute("class", "product-box");
      newDiv.setAttribute(
        "onclick",
        `location.href='/products/${Itemdata[i].id}'`
      );

      newDiv.innerHTML = `<div class='image' style="background-image:${Itemdata[i].image
        };"></div>
        <div class="product-text">${Itemdata[i].name}</div>
        <div class='product-text-bottom'>
          <b class="${Itemdata[i].status}">${Itemdata[
          i
        ].status.toUpperCase()}</b>
          <b class="price">रू. ${Itemdata[i].price}</b></div>`;
    }

  } catch (error) {
    console.error(error);
  }
}

fetchData();
