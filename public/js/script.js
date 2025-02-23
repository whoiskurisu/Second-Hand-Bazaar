// // Call the function when the page loads
// document.addEventListener("DOMContentLoaded", loadHomepage);

// async function loadHomepage() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("You are not logged in!");
//     window.location.href = "/login"; // Redirect to login page
//     return;
//   }

//   fetch('/', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     }).catch(error => {
//       console.log('Error:', error);
//     });
// }

fetchData();

async function fetchData() {
  try {

    const itemValue = await fetch(`http://localhost:5000/api/v1/products`);

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

      x.innerHTML = `<div class="first-row-image" style="background-image:${Itemdata[i].image
        };"></div>
      <div class="product-text">${Itemdata[i].name}</div>
      <div class='product-text-bottom'>
        <b class="${Itemdata[i].status}">${Itemdata[i].status.toUpperCase()}</b>
        <b class="price">रू. ${Itemdata[i].price}</b></div>`;
    }

    // For Second Row
    for (let i = 8; i <= 15; i++) {
      const x = document.createElement("div");
      const contain = document.querySelector(".second-row");

      contain.prepend(x);
      x.setAttribute("class", "product-box");
      x.setAttribute("onclick", `location.href='/products/${Itemdata[i].id}'`);

      x.innerHTML = `<div class="second-row-image" style="background-image:${Itemdata[i].image
        };"></div>
        <div class="product-text">${Itemdata[i].name}</div>
        <div class='product-text-bottom'>
        <b class="${Itemdata[i].status}">${Itemdata[i].status.toUpperCase()}</b>
        <b class="price">रू. ${Itemdata[i].price}</b></div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

// Scroll function
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}