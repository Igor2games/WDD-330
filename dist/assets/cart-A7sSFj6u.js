import{l,g as r}from"./utils-dBFMzG4w.js";l();function c(){const t=r("so-cart")||[],a=t.map(e=>i(e));document.querySelector(".product-list").innerHTML=a.join(""),d(t)}function d(t){const a=document.querySelector(".cart-footer");if(t.length>0){a.classList.remove("hide");const e=t.reduce((s,n)=>s+n.FinalPrice,0),o=document.querySelector(".cart-total");o.innerHTML=`Total: $${e.toFixed(2)}`}else a.classList.add("hide")}function i(t){return`<li class="cart-card divider" data-id="${t.Id}">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Images.PrimaryMedium}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <button class="cart-card__remove" aria-label="Remove ${t.Name} from cart">×</button>
</li>`}function m(t){let a=r("so-cart")||[];a=a.filter(e=>e.Id!==t),localStorage.setItem("so-cart",JSON.stringify(a)),c()}document.addEventListener("click",t=>{if(t.target.classList.contains("cart-card__remove")){const a=t.target.closest(".cart-card").dataset.id;m(a)}});c();
