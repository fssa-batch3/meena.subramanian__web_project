const myOrigin = window.location.origin;
// console.log(myOrigin);
const logo = `${myOrigin}/index.html`;
const logoSrc = `${myOrigin}/assets/img/image-removebg-preview.png`;
const loginpage = `${myOrigin}/pages/login page/logion page.html`;
const registerpage = `${myOrigin}/pages/register page/rigister page.html`;
const sareelist = `${myOrigin}/pages/products/product_list saree.html`;
const dothilist = `${myOrigin}/pages/products/product_list dothi.html`;
const aboutus = `${myOrigin}/pages/about us/about us.html`;
const seller = `${myOrigin}/pages/seller products/seller home.html`;
const profile = `${myOrigin}/pages/profile page/profile page.html`;
const cart = `${myOrigin}/pages/buy now page/add to cart.html`;
const order = `${myOrigin}/pages/orders/my orders.html`;
const favorite = `${myOrigin}/pages/whislist/wishlist.html`;

const beforeLogin = `
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
`;

const afterLogin = `
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
    <a href="${cart}"><i class="fa fa-shopping-cart" style="font-size:24px; color:black;"></i></a>
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
`;

function home() {
  const unique = JSON.parse(localStorage.getItem("uniqueID_user"));
  const head = document.getElementById("header");
  if (!unique) {
    head.innerHTML = beforeLogin;
  } else {
    head.innerHTML = afterLogin;
  }
}

home();
