const backpacksMenu = document.getElementById('backpacksMenu')
let itemView = [];

fetch('http://localhost:8080/products/messengerbags',{
    method:"GET",
    headers:{
        "Content-type":"application/json",
        Authorization : localStorage.getItem('token')
    }
})
 .then((res)=>{
    return res.json();
 })
 .then((data)=>{
    renderBackpacks(data);
 })



 function renderBackpacks(data){
    backpacksMenu.innerHTML = null;
    data.forEach((element,index)=>{
        let template = document.createElement('div');
        template.setAttribute('class','temp');
        let bag_image = document.createElement('img');
        bag_image.setAttribute('class','bag_image')
        bag_image.setAttribute('src',element.image);
        let bag_name = document.createElement('h6');
        bag_name.setAttribute('class','bag_name');
        bag_name.innerText = element.name;
        let bag_price = document.createElement('h5');
        bag_price.setAttribute('class','bag_price');
        bag_price.innerText = "Rs."+" "+element.price
        let bag_offer = document.createElement('h6');
        bag_offer.setAttribute('class','bag_offer');
        bag_offer.innerText = "BUY ANY 3 @ 2499 ONLY"
        template.append(bag_image,bag_name,bag_price,bag_offer);
        backpacksMenu.append(template)

        template.addEventListener('click',()=>{
            itemView.push(element);
            localStorage.setItem('itemView',JSON.stringify(itemView));
            window.location.href = "./itemView.html"
        })
    })
 }

const logOut = document.getElementById('logOut');


logOut.addEventListener('click',()=>{
    localStorage.setItem('token',null);
    localStorage.setItem('email',null);
    window.location.href = "./index.html"
})