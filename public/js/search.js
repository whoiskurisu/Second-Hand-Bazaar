async function fetchData() {
  try {
    const itemValue = await fetch(`http://localhost:5000/api/products`);

    if (!itemValue.ok) {
      throw new Error("Could not fetch resource");
    }
    const youSearched = decodeURIComponent(window.location.href).substring(37);
    const youSearchedDOM = document.querySelector("#searchDesc");

    youSearchedDOM.textContent = `You searched for '${youSearched}'`;
    const Itemdata = await itemValue.json();

    const searchItem = decodeURIComponent(window.location.href)
      .substring(37)
      .toLowerCase()
      .replace(/\s/g, "");

    for (let i in Itemdata) {
      //loops over array indexes
      if (
        Itemdata[i].name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchItem) == true
      ) {
        console.log(Itemdata[i]);
        const x = document.createElement("div");
        const contain = document.querySelector(".searchContainer");

        contain.append(x);
        x.setAttribute("class", "product-box");
        x.setAttribute(
          "onclick",
          `location.href='/products/${Itemdata[i].id}'`
        );

        x.innerHTML = `<div class='image' style="background-image:${
          Itemdata[i].image
        };"></div>
      <div class="product-text">${Itemdata[i].name}</div>
        <b class="${Itemdata[i].status}">${Itemdata[i].status.toUpperCase()}</b>
        <b class="price">रू. ${Itemdata[i].price}</b>`;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
