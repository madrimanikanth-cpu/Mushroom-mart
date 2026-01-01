let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedItem = null;

function updatePrice(select, basePrice) {
  const weight = select.value;
  const price = (basePrice * weight) / 100;
  select.nextElementSibling.innerText = "₹" + price;
}

function addToCart(name, btn) {
  const card = btn.parentElement;
  const price = card.querySelector(".price").innerText.replace("₹", "");
  selectedItem = { name, price };
  document.getElementById("confirm-item").innerText =
    `${name} – ₹${price}`;
  document.getElementById("confirm-modal").style.display = "flex";
}

function confirmAdd() {
  cart.push(selectedItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
  closeModal();
  showSuccess();
}

function closeModal() {
  document.getElementById("confirm-modal").style.display = "none";
}

function showSuccess() {
  const popup = document.getElementById("success-popup");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

document.getElementById("cart-count").innerText = cart.length;
