// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const item = event.target.getAttribute('data-item');
        const price = parseFloat(event.target.getAttribute('data-price'));

        // Create a new cart item
        const cartItem = {
            item: item,
            price: price
        };

        // Add the item to the cart
        addToCartUI(cartItem);

        // Update the total
        updateTotal();
    }

    function addToCartUI(cartItem) {
        const cartList = document.getElementById('cart-items');

        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;

        cartList.appendChild(li);
    }

    function updateTotal() {
        const cartItems = document.querySelectorAll('#cart-items li');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.textContent.split('-')[1].trim().slice(1));
            total += price;
        });

        document.getElementById('cart-total').textContent = total.toFixed(2);
    }
    document.addEventListener('DOMContentLoaded', function() {
        const mainSection = document.querySelector('.main-section');
    
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const opacity = 1 - (scrollPosition / 100); // Adjust the value based on your needs
    
            mainSection.style.opacity = opacity;
        });
    });
    

});
