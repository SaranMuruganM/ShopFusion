const products = document.getElementById("products");
let productsInfo = JSON.parse(localStorage.getItem("productInfo")) || [];

const localProducts= [
  {
    id: 21,
    title: "Iphone 15 PRO",
    price: "1,50,000",
    description:
      "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back.",
    image:
      "https://m.media-amazon.com/images/I/41JrUCWNjHL._SY445_SX342_QL70_FMwebp_.jpg",
    category: "electronics",
  },
  {
    id: 22,
    title: "One plus Nord CE4",
    price: "19,999",
    description:
      "Superior snaps by Sony: Harness the power of the 50MP Sony LYT-600 main camera, bringing the capability to capture stunning Sony-quality photos and videos directly into your palm.",
    image:
      "https://m.media-amazon.com/images/I/31hcJbP0BuL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "electronics",
  },
  {
    id: 23,
    title: "Samsung S24 Ultra",
    price: "150,000",
    description:
      "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8\") flat display. It's an absolute marvel of design",
    image: "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    category: "electronics",
  },
  {
    id: 24,
    title: "OnePlus 12R (Sunset Dune, 8GB RAM, 256GB Storage)",
    price: "42,998",
    description:
      "Fast & Smooth for years: Snapdragon 8 Gen 2 Mobile Platform, Up to 16GB of LPDDR5X RAM with RAM-Vita - Dual Cryo-velocity VC Cooling System, TÜV SÜD 48-Month Fluency Rating A",
    image:
      "https://m.media-amazon.com/images/I/4174CfbPwRL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "electronics",
  },
  {
    id: 25,
    title: "iQOO 12 5G (Legend, 12GB RAM, 256GB Storage)",
    price: "52,998",
    description:
      "3.3 GHz Snapdragon 8 Gen 3 mobile platform, which is on 4nm TSMC Process. Enhanced graphic performance with Adreno 750. In addition to that, it has LPDRR5X RAM & UFS 4.0 storage.",
    image:
      "https://m.media-amazon.com/images/I/411gvmvNQzL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "electronics",
  },
  {
    id: 26,
    title: "Xiaomi 14 (Black, 12GB RAM, 512GB Storage) ",
    price: "69,999",
    description:
      "50MP Leica professional optics helps in capture images in great detail. Light Fusion 900 image sensor with extremely high dynamic range for clear backlit shots",
    image:
      "https://m.media-amazon.com/images/I/41r6mLsKMbL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "electronics",
  },
  {
    id: 27,
    title: "Apple iPhone 13 (256GB) - Pink",
    price: "59,900",
    description: "Apple iPhone 13 (256GB) - Pink",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SX679_.jpg",
    category: "electronics",
  },
  {
    id: 28,
    title: "realme GT 6T 5G (Miracle purple,8GB RAM+256GB Storage)",
    price: "32,998",
    description:
      "India's 1st 7+ Gen 3 Flagship Chipset 1.5M + AnTuTu Score,According to Qualcomm's official data, compared with Snapdragon 7+ Gen 2, CPU performance is increased by 15% and GPU performance is increased by 45%",
    image: "https://m.media-amazon.com/images/I/71Uwv6PlzLL._SX569_.jpg",
    category: "electronics",
  },
  {
    id: 29,
    title: "TECNO Phantom V Flip 5G (Mystic Dawn 8GB RAM, 256GB Storage)",
    price: "54,899",
    description:
      "Battery : 45W Fast Charging | Powerful 4000mAh Big Battery (33% Charge in just 10 minutes) Camera : 32MP Selfie | 64MP Rear Camera (Ultra Clear, Flexible Angles, RGBW Night Shot)",
    image: "https://m.media-amazon.com/images/I/51f6KD6OKkL._SX569_.jpg",
    category: "electronics",
  },
  {
    id: 30,
    title: "Motorola razr 50 ultra (Spring Green, 12GB RAM, 512GB Storage)",
    price: "94,999",
    description:
      "Snapdragon 8s Gen 3 Mobile Platform, 12GB LPDDR5X RAM, 512GBbuilt-in UFS 4.0 Storage",
    image: "https://m.media-amazon.com/images/I/61G-KeNnaFL._SX569_.jpg",
    category: "electronics",
  },
];

fetch("https://fakestoreapi.com/products")
.then((productsInformation)=>productsInformation.json())
.then((productsInformation)=>{
  productsInformation = [...productsInformation,...localProducts ] 
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
  location.reload();
}



