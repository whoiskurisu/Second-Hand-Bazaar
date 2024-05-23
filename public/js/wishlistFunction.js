const cart = document.querySelector("#addToCart");
const wishlist = document.querySelector("#wishlist");
const form1 = document.querySelector("#product-form");

cart.addEventListener("click", () => {
  form1.setAttribute("action", "/cart");
});

wishlist.addEventListener("click", () => {
  form1.setAttribute("action", "/wishlist");
});
