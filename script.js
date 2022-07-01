const valueElement = document.querySelector('#value');

function decrease() {
  --valueElement.innerHTML;
  if(valueElement.innerText <= '0') valueElement.style.color = "red";
}

function reset() {
  valueElement.innerHTML = 0;
  valueElement.style.color = "initial";
}

function increase() {
  ++valueElement.innerHTML;
  if(valueElement.innerText >= '1') valueElement.style.color = "green";
}