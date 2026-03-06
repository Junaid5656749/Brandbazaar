// Hero Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(showSlide,3000);

// Add to Cart
let cart = [];
let total = 0;

function addToCart(product, price){
  cart.push(product);
  total += price;
  let li = document.createElement("li");
  li.innerText = product + " - Rs " + price;
  document.getElementById("cartItems").appendChild(li);
  document.getElementById("total").innerText = "Total: Rs " + total;
}

// Scroll to Checkout
function checkout(){
  document.getElementById("checkoutSection").scrollIntoView();
}

// WhatsApp Order Checkout
function sendOrder(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let city = document.getElementById("city").value;
  let product = document.getElementById("product").value;
  let qty = document.getElementById("qty").value;
  let address = document.getElementById("address").value;

  let message = "New Order from Brand Bazaar:%0A"
    + "Name: " + name + "%0A"
    + "Phone: " + phone + "%0A"
    + "City: " + city + "%0A"
    + "Product: " + product + "%0A"
    + "Quantity: " + qty + "%0A"
    + "Address: " + address;

  // WhatsApp Number 03435396931
  let whatsapp = "https://wa.me/923435396931?text=" + message;
  window.open(whatsapp,"_blank");
}
