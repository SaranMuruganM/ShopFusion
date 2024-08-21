const products = document.getElementById("products");
let productsInfo = JSON.parse(localStorage.getItem("productInfo"));


for (let element of productsInfo) {
  const product = document.createElement("div");
  product.classList.add("product");
  products.appendChild(product);
  product.innerHTML = `
    <img src="${element.imageURL}" alt="image">
    <h3>${element.name}</h3>
    <h4>${element.description.slice(0, 60)}...</h4>
    <h4><sup>₹</sup> ${element.price}</h4>
    <button onclick="cart(${element.id})">Check out </buttton>
    `;
}
