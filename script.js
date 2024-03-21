document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'cart-btn'
    var addToCartButtons = document.querySelectorAll('.cart-btn');

    // Add event listener to each 'ADD TO CART' button
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Get product details from the clicked button's parent container
        var product = this.closest('.offer');
        var productName = product.querySelector('.offer-title').textContent;
        var price = parseFloat(product.querySelector('.offer-hook').textContent.split(':')[1]);

        // Call addToCart function with product details
        addToCart(productName, price);
      });
    });

    // Function to add item to cart
    function addToCart(productName, price) {
      // Check if localStorage is supported
      if (typeof(Storage) !== "undefined") {
        // Retrieve cart items from localStorage
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add new item to cartItems array
        cartItems.push({ productName: productName, price: price });

        // Store updated cartItems array back to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Optionally, display a message to the user confirming item addition
        alert(productName + " added to cart!");
      } else {
        alert("Sorry, your browser does not support Web Storage. Please try a different browser.");
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const showNavbarBtn = document.querySelector('.show-navbar-btn');
  
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  
    showNavbarBtn.addEventListener('click', function() {
      navbar.classList.add('active');
    });
  });
  