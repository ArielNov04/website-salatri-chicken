let cartCount = 0;

function addToCart(item) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    localStorage.setItem('cartCount', cartCount);
}

function goToPayment() {
    if(cartCount > 0) {
        localStorage.setItem('cartCount', cartCount);
        window.location.href = 'payment.html';
    } else {
        alert('Keranjang masih kosong!');
    }
}
