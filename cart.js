const products = document.getElementById("products");
let productsInfo = JSON.parse(localStorage.getItem("productInfo")) || [];
fetch("https://fakestoreapi.com/products")
.then((productsInformation)=>productsInformation.json())
.then((productsInformation)=>{
  const cartItems=productsInformation.filter((element)=>productsInfo.includes(element.id));
  cartItems.forEach((element) => {
    const product = document.createElement("div");
    product.classList.add("product");
    products.appendChild(product);
    product.innerHTML = `
    <img src="${element.image}" alt="image">
    <div class="productDescription">
    <h3>${element.title}</h3>
    <h4>${element.description.slice(0, 60)}...</h4>
    <h4><sup>₹</sup> ${element.price}</h4>
    <div class="btn">
    <button onclick="cart(${element.id})">Check Out</button>
    <button onclick="removeCartElement(${element.id})">Remove Item</button>
    </div>
    </div>

    
    `;
  });
})

const removeCartElement=(elementId)=>{
  productsInfo=productsInfo.filter(element=>element!==elementId);
  localStorage.setItem("productInfo",JSON.stringify(productsInfo));
  localStorage.setItem("cartSize",productsInfo.length)
  location.reload();
}



