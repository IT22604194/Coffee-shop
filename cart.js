let cartItemsContainer = document.querySelector('.cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cart.length > 0) {
    cartItemsContainer.innerHTML = ''; // Clear placeholder text
    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <span>${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
} else {
    cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
}
