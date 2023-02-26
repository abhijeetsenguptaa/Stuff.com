let cartTotaller = document.getElementById('cartTotaller');
let cartView = JSON.parse(localStorage.getItem('cartView'))

cartTotaller.innerText = cartView.length;