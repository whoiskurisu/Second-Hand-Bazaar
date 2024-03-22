const iconClose = document.querySelector(".icon-close");

function close() {
  console.log("meow");
  location.href = "./index.html";
}
iconClose.addEventListener("click", close);
