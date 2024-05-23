let stars = document.querySelectorAll("#rating span");

function starFunction(n) {
  /* Trying to create a submit button for rating
        
             newDiv = document.getElementById("lol")
             let button = document.createElement("button");
             button.textContent = "Submit";
             newDiv.appendChild(button);
        */

  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5)
      newClassName = "goldStar";
    stars[i].className = newClassName;
  }
}

function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "blackStar";
    i++;
  }
}
