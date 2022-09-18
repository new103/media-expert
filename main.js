{
  /* <div class="product-item on-sale">
  <img src="images/huawei-1.jpg" alt="" />
  <p class="product-name">Huawei p20</p>
  <p class="product-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem
    distinctio fuga quasi amet! Expedita voluptatem voluptates illum unde
    maiores.
  </p>
  <div class="product-price">
    <span class="price">&#36; 299</span>
    <span class="price-sale">&#36; 199</span>
  </div>
  <button class="add-btn">Buy Now</button>
  <div class="product-sale-info">Sale</div>
</div> */
}

const currentProducts = products;
// console.log(currentProducts);

const productsSection = document.querySelector(".products");

const renderProducts = (items) => {
  for (let i = 0; i < items.length; i++) {
    const newProduct = document.createElement("div");
    newProduct.className = `product-item ${items[i].sale ? "on-sale" : ""}`;

    newProduct.innerHTML = `
    <img src="${items[i].image}" alt="product-image" />
    <p class="product-name">${items[i].name}</p>
    <p class="product-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem
    distinctio fuga quasi amet! Expedita voluptatem voluptates illum unde
    maiores.
    </p>
    <div class="product-price">
    <span class="price">&#36; ${items[i].price}</span>
    <span class="price-sale">&#36; ${items[i].saleAmount}</span>
    </div>
    <button class="add-btn">Buy Now</button>
    <div class="product-sale-info">Sale</div>`;

    productsSection.appendChild(newProduct);
  }
};

document.onload = renderProducts(currentProducts);
