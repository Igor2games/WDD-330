import{l as o,g as c}from"./utils-B7drxXma.js";o();function e(){const t=(c("so-cart")||[]).map(r=>s(r));document.querySelector(".product-list").innerHTML=t.join("")}function s(a){return`<li class="cart-card divider" data-id="${a.Id}">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Image}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
  <button class="cart-card__remove" aria-label="Remove ${a.Name} from cart">×</button>
</li>`}function n(a){let t=c("so-cart")||[];t=t.filter(r=>r.Id!==a),localStorage.setItem("so-cart",JSON.stringify(t)),e()}document.addEventListener("click",a=>{if(a.target.classList.contains("cart-card__remove")){const t=a.target.closest(".cart-card").dataset.id;n(t)}});e();
