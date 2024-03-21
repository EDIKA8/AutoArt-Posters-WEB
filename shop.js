var cartItems = [];
const exchangeRate = 3.10; 

function goBack() {
  window.history.back();
}

function addToCart(productName, priceUSD) {
  var priceGEL = priceUSD * exchangeRate; 
  cartItems.push({ productName: productName, price: priceGEL });
  displayCart();
}

function displayCart() {
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.textContent = item.productName + ' - ' + item.price.toFixed(2) + ' GEL'; // Display price in Georgian Lari
    cartItemsContainer.appendChild(itemElement);
  });
}

shop.js

