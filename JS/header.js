
var myOrigin = window.location.origin;
var logo = myOrigin + "/index.html";
var logoSrc = myOrigin + "/assets/img/image-removebg-preview.png";
var loginpage = myOrigin + "/pages/login page/logion page.html";
var registerpage = myOrigin + "/pages/register page/rigister page.html";
var sareelist = myOrigin + "/pages/products/product_list saree.html";
var dothilist = myOrigin + "/pages/products/product_list dothi.html";
var aboutus = myOrigin + "/pages/about us/about us.html";
var seller = myOrigin + "/pages/seller products/seller home.html";
var profile = myOrigin + "/pages/profile page/profile page.html"
var cart = myOrigin + "/pages/buy now page/add to cart.html"
var order = myOrigin + "/pages/orders/my orders.html"
var favorite = myOrigin + "/pages/whislist/wishlist.html"

let beforeLogin = 
`
<div class="logo">
<a href="${logo}"><img src="${logoSrc}" alt="logo" width="100px" height="80px"></a>
</div>

<div class="nav">
<ul>
    <li><a href="${sareelist}">Sarees</a></li>
    <li><a href="${dothilist}">Dhotis</a></li>
    <li><a href="${aboutus}">About us</a></li>
    <li><a href="#footer">Contact</a></li>
    <li><a href="${seller}">Seller</a></li>
</ul>
</div>


<div class="navigations">
<div class="search">
<input type="search" placeholder="search" >
</div> 

<a  href= "${loginpage}"><button class="log">Log in</button></a>
<a href="${registerpage}"><button class="log">Sign up</button></a>
</div>
`

let afterLogin =
    `
<div class="logo">
<a href="${logo}"><img src="${logoSrc}" alt="logo" width="100px" height="80px"></a>
</div>

<div class="nav">
<ul>
    <li><a href="${sareelist}">Sarees</a></li>
    <li><a href="${dothilist}">Dhotis</a></li>
    <li><a href="${aboutus}">About us</a></li>
    <li><a href="#footer">Contact</a></li>
    <li><a href="${seller}">Seller</a></li>
</ul>
</div>


<div class="navigations">
<div class="search">
<input type="search" placeholder="search" >
</div>
   

<div class="cart">
    <a href="${cart}"><i class="fa fa-shopping-cart" style="font-size:24px; color:black;"></i>
</div>
<div class="accound">
    <a href="${profile}"><i class="fa fa-user-circle-o"style="font-size:24px;color:black;"></i>
    </a>
</div>
<div class="order">
    <a href="${order}"><i class="fa fa-shopping-bag" style="font-size:22px; color:black;"></i></a>
</div>
<div class="favorite">
    <a href="${favorite}"><i class="fa fa-heart" style="font-size: 22px; color:black;"></i></a>
</div>
</div>
`

function home(){
    let unique = JSON.parse(localStorage.getItem("uniqueID_user"));
    let header = document.getElementById('header');
    if(!unique){
        header.innerHTML = beforeLogin;
    }
    else{
        header.innerHTML = afterLogin;
    }

}

