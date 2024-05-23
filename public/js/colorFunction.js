const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btns = [btn1, btn2, btn3];
const colorInput = document.querySelector("#color-input");

const removeColor = () => {
  for (let i = 0; i <= 2; i++) {
    btns[i].style.transform = "none";
    btns[i].style.boxShadow = "none";
  }
};

btn1.addEventListener("click", () => {
  colorInput.setAttribute("value", "Blue");
  removeColor();
  btn1.style.transform = "scale(1.05)";

  btn1.style.boxShadow = "0 0 5px rgba(0, 0, 0, 1)";
});

btn2.addEventListener("click", () => {
  colorInput.setAttribute("value", "Golden");
  removeColor();
  btn2.style.transform = "scale(1.05)";

  btn2.style.boxShadow = "0 0 5px rgba(0, 0, 0, 1)";
});

btn3.addEventListener("click", () => {
  colorInput.setAttribute("value", "Dirt Green");
  removeColor();
  btn3.style.transform = "scale(1.05)";

  btn3.style.boxShadow = "0 0 5px rgba(0, 0, 0, 1)";
});
