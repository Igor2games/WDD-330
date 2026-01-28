import{c as i,l as s,b as c}from"./utils-dBFMzG4w.js";import{E as o}from"./ExternalServices--z5BbAee.js";function n(t){return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${t.Images.PrimaryMedium}" alt="${t.Name}">
        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class l{constructor(e,a,r){this.category=e,this.dataSource=a,this.listElement=r}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){i(n,this.listElement,e)}}s();const d=c("category"),m=new o,u=document.querySelector(".product-list"),h=new l(d,m,u);h.init();
