//https://hesapmakinesi.biz/hesap-makinesi/hafizali-hesap-makinesi-online/

const displayValue = document.querySelector("#total").textContent;
const num9Clicked = document
  .querySelectorAll(".calc_int")
  .forEach(function (element) {
    element.addEventListener("click", buttonValue);
  });
function displayUpdate() {
  console.log(`${displayValue}`);
}

displayUpdate();
function buttonValue(value) {
  console.log(`${value}`);
}
const x1 = document.querySelectorAll(".calc_int");
console.log(`${[...x1.item]}`);
