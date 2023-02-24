const cartMenu = document.getElementById('cartMenu');
let cartView = JSON.parse(localStorage.getItem('cartView')) || [] ;
let sum = 0;
let totalAmount = document.getElementById('totalAmount');
let totalAmount1 = document.getElementById('totalAmount1');
let leftBox = document.getElementById('leftBox');
let totalCount = document.getElementById('totalCount');
totalCount.innerText = cartView.length;
let checkOut = document.getElementById('checkOut');
function cartItems(data){
    leftBox.innerHTML = null;
    data.forEach((element,index)=>{
        let cart_box = document.createElement('div');
        cart_box.setAttribute('class','cart_box');
        let cart_image = document.createElement('img');
        cart_image.setAttribute('src',element.image);
        cart_image.setAttribute('class','cart_image');
        let cart_productDetails = document.createElement('div');
        cart_productDetails.setAttribute('class','cart_productDetails');
        let cart_name = document.createElement('h4');
        cart_name.innerText = element.name;
        cart_name.setAttribute('class','cart_name');
        let cart_price = document.createElement('h4');
        cart_price.innerText = "Rs."+" "+element.price;
        cart_price.setAttribute('class','cart_price')
        sum+=(+element.price);
        let cart_removeButton = document.createElement('button');
        cart_removeButton.setAttribute('class','cart_removeButton')
        cart_removeButton.innerText = "REMOVE";
        cart_removeButton.addEventListener('click',()=>{
            cartView.splice(index,1);
            localStorage.setItem('cartView',JSON.stringify(cartView));
            cartItems(cartView);
        })
        cart_productDetails.append(cart_name,cart_price,cart_removeButton)
        cart_box.append(cart_image,cart_productDetails);
        leftBox.append(cart_box)
        totalAmount.innerText = sum;
        totalAmount1.innerText = sum;
    })
}


cartItems(cartView);

checkOut.addEventListener("click",()=>{
    cartView.forEach((element,index)=>{
        let obj = {
            name:element.name,
            price:element.price,
            category:element.category,
            purchased_on:new Date(),
            purchased_by:localStorage.getItem('email')
        }
        
        fetch('http://localhost:8080/purchase/add',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
            Authorization:localStorage.getItem('token')
        },
        body:JSON.stringify(obj)
    })
    })
})

logOut.addEventListener('click',()=>{
    localStorage.setItem('token',null);
    localStorage.setItem('email',null);
    window.location.href = "./index.html"
})