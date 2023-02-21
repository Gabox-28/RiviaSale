const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenuIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}

function toggleCartAside(){
    aside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}