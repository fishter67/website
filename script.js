const inputBox = document.getElementById("input");
const output = document.getElementById("output");
const submitBtn = document.getElementById("subBtn");

submitBtn.addEventListener("click", function() {
  if (inputBox.value.trim() !== "") {
    output.innerText = "Submitted!";
  } else {
    output.innerText = "Please type something first!";
  }
});