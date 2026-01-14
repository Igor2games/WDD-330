import{r as s}from"./utils-CITsq9M8.js";import{P as a}from"./ProductData-D6Sl5V2y.js";function n(t){return`
    <li class="product-card">
      <a href="product_pages/?product=${t.Id}">
        <img src="${t.Image}" alt="${t.Name}">
        <h2>${t.Brand.Name}</h2>
        <h3>${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class c{constructor(e,i,r){this.category=e,this.dataSource=i,this.listElement=r}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){if(!Array.isArray(e)||!this.listElement)return;const i=e.filter(r=>r&&r.Id!=="989CG"&&r.Id!=="880RT");if(i.length===0){this.listElement.innerHTML="";return}s(n,this.listElement,i)}}const l=new a("tents"),o=document.querySelector(".product-list"),d=new c("Tents",l,o);d.init();
