const logOut = document.getElementById('logOut');


logOut.addEventListener('click',()=>{
    localStorage.setItem('token',null);
    localStorage.setItem('email',null);
    window.location.href = "./index.html"
})