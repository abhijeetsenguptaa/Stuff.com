const itemsMenu = document.getElementById('itemsMenu');
let cartView = JSON.parse(localStorage.getItem('cartView'))|| [];
let itemView = JSON.parse(localStorage.getItem('itemView'));
console.log(itemView);

itemView.forEach((element)=>{
    let itemView_temp = document.createElement('div');
    itemView_temp.setAttribute('class','itemView_temp')
    let itemView_image = document.createElement('img');
    itemView_image.setAttribute('src',element.image);
    itemView_image.style.width="50%"
    let itemView_right = document.createElement('div');
    itemView_right.setAttribute('class','itemView_right');
    let itemView_name = document.createElement('h1');
    itemView_name.innerText = element.name;
    itemView_name.setAttribute('class','itemView_name');
    let itemView_price = document.createElement('h4');
    itemView_price.innerText = "Rs."+" "+element.price;
    itemView_price.setAttribute('class','itemView_price')
    let itemView_color = document.createElement('h3');
    itemView_color.innerText = "COLOR";
    itemView_color.setAttribute('class','itemView_color');
    let itemView_colorBar = document.createElement('div');
    itemView_colorBar.setAttribute('class','itemView_colorBar');
    let firstColor = document.createElement('div');
    firstColor.setAttribute('class','firstColor');
    let secondColor = document.createElement('div');
    secondColor.setAttribute('class','secondColor');
    let thirdColor = document.createElement('div');
    thirdColor.setAttribute('class','thirdColor');
    let fourthColor = document.createElement('div');
    fourthColor.setAttribute('class','fourthColor');
    let addToCart = document.createElement('button');
    addToCart.innerText = "ADD TO CART"
    addToCart.setAttribute('class','addToCart');

    addToCart.addEventListener('click',()=>{
        cartView.push(element);
        localStorage.setItem('cartView',JSON.stringify(cartView));
        alert('Product added to the cart!!')
    })

    let offers = document.createElement('h3');
    offers.innerText = "EXCITING OFFERS"
    offers.setAttribute('class','offers');
    let discountCoupon = document.createElement('h3');
    discountCoupon.innerText = "*FREE DUFFLE BAG ON ORDERS ABOVE Rs.2999 / FREE KEYCHAIN SET ON ORDERS ABOVE Rs.1999"
    discountCoupon.setAttribute('class','discountCoupon');
    let itemView_search = document.createElement('input');
    itemView_search.setAttribute('placeholder',"Enter Pincode To Check Delivery") 
    itemView_search.setAttribute('class','itemView_search');
    let itemView_desc = document.createElement('h4');
    itemView_desc.setAttribute('class','itemView_desc')
    itemView_desc.innerText = element.description
    itemView_colorBar.append(firstColor,secondColor,thirdColor,fourthColor);
    itemView_right.append(itemView_name,itemView_price,itemView_color,itemView_colorBar,addToCart,offers,discountCoupon,itemView_search,itemView_desc)
    itemView_temp.append(itemView_image,itemView_right);
    itemsMenu.append(itemView_temp);
})




logOut.addEventListener('click',()=>{
    localStorage.setItem('token',null);
    localStorage.setItem('email',null);
    window.location.href = "./index.html"
})