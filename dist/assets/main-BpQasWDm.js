import{r as i,l as s}from"./utils-D-0gKak0.js";import{P as n}from"./ProductData-D6Sl5V2y.js";function c(t){return`
    <li class="product-card">
      <a href="product_pages/?product=${t.Id}">
        <img src="${t.Image}" alt="${t.Name}">
        <h2>${t.Brand.Name}</h2>
        <h3>${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class l{constructor(e,a,r){this.category=e,this.dataSource=a,this.listElement=r}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){if(!Array.isArray(e)||!this.listElement)return;const a=e.filter(r=>r&&r.Id!=="989CG"&&r.Id!=="880RT");if(a.length===0){this.listElement.innerHTML="";return}i(c,this.listElement,a)}}const o=new n("tents"),d=document.querySelector(".product-list");s();const m=new l("Tents",o,d);m.init();
