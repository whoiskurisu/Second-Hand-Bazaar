let plus = document.querySelector("#quantity-plus");
let minus = document.querySelector("#quantity-minus");
let input = document.querySelector("#quantity-input");
let value = Number(input.value);

// Input Validation
// input.addEventListener("onkeypress", () => {
//   return ["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(event.code)
//     ? true
//     : !isNaN(Number(event.key)) && event.code !== "Space";
// });

minus.addEventListener("click", () => {
  value = value - 1;
  if (value <= 0) {
    value = 0;
  }
  input.setAttribute("value", value);
});

plus.addEventListener("click", () => {
  value = value + 1;
  input.setAttribute("value", value);
});
