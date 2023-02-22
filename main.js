const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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

const productList = []

productList.push({
    name: 'Adidas Forum',
    price: '120',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg'
})

function renderProducts(arr){
    let product;

    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.classList.add('product-img')

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.append(productPrice, productName)

        const productInfoFigure = document.createElement('figure')
        const productInfoCart = document.createElement('img')
        productInfoCart.setAttribute('src', './icons/add-cart.png')

        productInfoFigure.appendChild(productInfoCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.append(productImg, productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)