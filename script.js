const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
let itemCount = 0;

document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElem = this.previousElementSibling;
        let currentQuantity = parseInt(quantityElem.textContent);
        quantityElem.textContent = currentQuantity + 1;
        updateCart();
    });
});

document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElem = this.previousElementSibling.previousElementSibling;
        let currentQuantity = parseInt(quantityElem.textContent);
        if (currentQuantity > 1) {
            quantityElem.textContent = currentQuantity - 1;
        }
        updateCart();
    });
});

function updateCart() {
    itemCount += 1; // تحديث الكمية الإجمالية
    cartCount.textContent = itemCount;
    cartItems.textContent = "You have " + itemCount + " items in your cart.";
}
