let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}




let header = document.querySelector('header');

window.addEventListener('scroll'  , ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
})
let cartIcon = document.querySelector('.bx-cart');

cartIcon.onclick = () => {
    // Redirect to the cart page
    window.location.href = 'cart.html';
};
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.onclick = (e) => {
        let productBox = e.target.closest('.box');
        let productName = productBox.querySelector('h3').textContent;
        let productPrice = productBox.querySelector('span').textContent;

        // Add item to the cart array
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Item added to cart!');
    };
});



