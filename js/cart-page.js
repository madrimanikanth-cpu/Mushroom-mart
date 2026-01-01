let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart-items");

function renderCart() {
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    item.qty = item.qty || 1;
    total += item.price * item.qty;

    cartDiv.innerHTML += `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <div class="qty">
          <button onclick="changeQty(${index},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index},1)">+</button>
        </div>

        <button class="remove" onclick="removeItem(${index})">✕</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));

  gsap.from(".cart-item", {
    opacity: 0,
    x: -30,
    stagger: 0.1
  });
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) removeItem(index);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

renderCart();
