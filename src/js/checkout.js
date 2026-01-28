import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

// Add event listeners to fire calculateOrderTotal when the user changes the zip code
document
    .querySelector("#zip")
    .addEventListener("blur", order.calculateOrderTotal.bind(order));

// Add auto-formatting for expiration date field
const expirationInput = document.querySelector("#expiration");
expirationInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

    // Auto-format as MM/YY
    if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    e.target.value = value;
});

// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
    e.preventDefault();

    order.checkout();
});