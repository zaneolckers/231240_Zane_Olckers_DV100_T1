// Form
function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting normally
  const name = document.getElementById('yourName').value;
  const email = document.getElementById('emailAddress').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you, ' + name + '! Your message has been submitted successfully.');
  } else {
      alert('Please fill out all fields before submitting.');
  }
}

// search bar
function searchBar() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('planets');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

// filter bar // Most proud
document.addEventListener('DOMContentLoaded', function() {
  const showSelect = document.getElementById('show-select');
  const sortSelect = document.getElementById('sort-select');
  const showingResults = document.getElementById('showing-results');
  const totalResults = document.getElementById('total-results');

  showSelect.addEventListener('change', function() {
    const selectedValue = showSelect.value;
    updateResults(selectedValue, sortSelect.value);
  });

  sortSelect.addEventListener('change', function() {
    const selectedValue = sortSelect.value;
    updateResults(showSelect.value, selectedValue);
  });

  function updateResults(showCount, sortBy) {
    console.log(`Show ${showCount} results, sorted by ${sortBy}`);
    const total = parseInt(totalResults.innerText);
    showingResults.innerText = `1-${Math.min(showCount, total)}`;
  }
});

//View Cart Modal
document.getElementById('viewCartBtn').addEventListener('click', function() {
  var cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
  updateCart();
  cartModal.show();
});

var cart = [
  { id: 1, name: 'Mars Experience', quantity: 2, price: 25000 },
  { id: 2, name: 'Neptune Dive', quantity: 1, price: 45000 },
  { id: 3, name: 'Jupiter Journey', quantity: 3, price: 65000 }
];

function updateCart() {
  var cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  var total = 0;

  cart.forEach(function(item) {
      var itemTotal = item.quantity * item.price;
      total += itemTotal;

      var row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td><input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="cart-quantity"></td>
          <td>$${item.price.toFixed(2)}</td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td><button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button></td>
      `;
      cartItems.appendChild(row);
  });

  document.getElementById('cartTotal').innerText = total.toFixed(2);

  var quantityInputs = document.querySelectorAll('.cart-quantity');
  quantityInputs.forEach(function(input) {
      input.addEventListener('change', function() {
          var itemId = parseInt(this.getAttribute('data-id'));
          var newQuantity = parseInt(this.value);
          updateQuantity(itemId, newQuantity);
      });
  });
}

function updateQuantity(id, quantity) {
  var item = cart.find(function(item) { return item.id === id; });
  if (item) {
      item.quantity = quantity;
      updateCart();
  }
}

function removeItem(id) {
  cart = cart.filter(function(item) { return item.id !== id; });
  updateCart();
}