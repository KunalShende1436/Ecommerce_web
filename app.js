// Product Data
const products = [
  { id: 1, name: "Headphones", price: 1200, img: "images/product1.jpg" },
  { id: 2, name: "Smart Watch", price: 2500, img: "images/product2.jpg" },
  { id: 3, name: "Shoes", price: 1800, img: "images/product3.jpg" },
  { id: 4, name: "T-Shirt", price: 800, img: "images/product4.jpg" }
];

// Load products on products.html
if (document.getElementById("product-list")) {
  const container = document.getElementById("product-list");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Add to cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Display cart items
if (document.getElementById("cart-items")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;
  cart.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
    container.appendChild(div);
    total += p.price;
  });
  document.getElementById("cart-total").textContent = total;
}
