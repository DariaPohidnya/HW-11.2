const textBlock = document.getElementById("textBlock");
const button = document.getElementById("toggleColorButton");

let isColored = false;

button.addEventListener("click", () => {
    if (isColored) {  

        textBlock.style.color = "black";

    } else {

        textBlock.style.color = "red";

      }

      isColored = !isColored;
});
