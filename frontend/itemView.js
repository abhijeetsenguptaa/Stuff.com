const itemsMenu = document.getElementById('itemsMenu');

let itemView = JSON.parse(localStorage.getItem('itemView'));
console.log(itemView);

itemView.forEach((element)=>{
    let itemView_temp = document.createElement('div');
    itemView_temp.setAttribute('class','itemView_temp')
    let itemView_image = document.createElement('img');
    itemView_image.setAttribute('src',element.image);
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
    itemView_colorBar.append(firstColor,secondColor,thirdColor,fourthColor);
    itemView_right.append(itemView_name,itemView_price,itemView_color,itemView_colorBar,addToCart)
    itemView_temp.append(itemView_image,itemView_right);
    itemsMenu.append(itemView_temp);
})