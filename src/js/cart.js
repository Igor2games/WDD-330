import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Check if cart has items and show/hide cart footer
  checkCartContents(cartItems);
}

function checkCartContents(cartItems) {
  const cartFooter = document.querySelector(".cart-footer");
  if (cartItems.length > 0) {
    cartFooter.classList.remove("hide");
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
    // Display total in cart-total element
    const cartTotalElement = document.querySelector(".cart-total");
    cartTotalElement.innerHTML = `Total: $${total.toFixed(2)}`;
  } else {
    cartFooter.classList.add("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider" data-id="${item.Id}">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="cart-card__remove" aria-label="Remove ${item.Name} from cart">×</button>
</li>`;

  return newItem;
}

function removeFromCart(itemId) {
  // Get current cart from localStorage
  let cartItems = getLocalStorage("so-cart") || [];

  // Remove the item with matching id
  cartItems = cartItems.filter((item) => item.Id !== itemId);

  // Save updated cart to localStorage
  localStorage.setItem("so-cart", JSON.stringify(cartItems));

  // Re-render the cart list
  renderCartContents();
}

// Add event listener for remove buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-card__remove")) {
    // Get the cart item's id from the data-id attribute
    const itemId = e.target.closest(".cart-card").dataset.id;
    removeFromCart(itemId);
  }
});

renderCartContents();