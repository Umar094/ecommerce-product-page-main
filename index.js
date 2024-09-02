const mainImg = document.querySelector('[data-main-img]');
const thumbNailImg = document.getElementsByClassName('main__thumbnail-image');


// -CHANGE IMG WHEN CLICK-

const thumbNailImgBox = document.querySelector('.main__thumbnain-img-box');

const thumbNailImgWrapper = document.getElementsByClassName('main__thumbnail-image-wrapper');

thumbNailImgBox.addEventListener('click', (event) => {
    
    if(event.target.matches('.main__thumbnail-image') ){
        let currentImg = event.target;
        let parentOfImg = currentImg.closest('.main__thumbnail-image-wrapper');

        for(let i = 0; i < thumbNailImgWrapper.length; i++){
            thumbNailImgWrapper[i].classList.remove('currentImg');
        }

        switch(event.target){
            case thumbNailImg[0]:
            mainImg.src = './images/image-product-1.jpg';
            currentImg.closest('.main__thumbnail-image-wrapper');
            parentOfImg.classList.add('currentImg');
            break;
    
            case thumbNailImg[1]:
            mainImg.src = './images/image-product-2.jpg';
            parentOfImg.classList.add('currentImg');
            break;
    
            case thumbNailImg[2]:
            mainImg.src = './images/image-product-3.jpg';
            parentOfImg.classList.add('currentImg');
            break;
    
            case thumbNailImg[3]:
            mainImg.src = './images/image-product-4.jpg';
            parentOfImg.classList.add('currentImg');
            break;
        }

    };
});

// -AMOUNT OF PRODUCT-

const amountBox = document.querySelector('.main__amount');
const countOfProduct = document.querySelector('[data-count]');
const cartStatus = document.querySelector('.header__how-much');
let howMuch = 0;

amountBox.addEventListener('click', (event) => {
    let symbol = event.target;
    let currentNum = Number(countOfProduct.innerText);

    if(symbol.matches('.main__plus') || symbol.matches('.main__minus') ){

        symbol.matches('.main__plus') ? howMuch = currentNum + 1 : (howMuch > 0 ? howMuch = currentNum - 1 : null);

        countOfProduct.innerText = String(howMuch);
    };

})

// OPEN CART

const cartDropdown = document.querySelector('.cart-dropdown');

function openCart(){
    cartDropdown.classList.toggle('cart-open')
};

// ADD PRODUCT TO CART

const productPlaceBox = document.querySelector('.cart-dropdown__main');
const emptyCart = document.querySelector('.cart-dropdown__main-empty');

let howMuchIsInCart = 0;

function addProductToCart(){
    if(howMuch !== 0){
        howMuchIsInCart++;
        cartStatus.innerText = howMuchIsInCart;
        cartStatus.classList.remove('cart-status');

        let div = document.createElement('div');
        div.classList.add('cart-dropdown__added-product');

        let productImg = document.createElement('img');
        productImg.src = './images/image-product-1-thumbnail.jpg';

        let cardDescriprionWrapper = document.createElement('div');
        cardDescriprionWrapper.classList.add('cart-dropdown__description')

        const productNameSpan = document.createElement('span');
        productNameSpan.classList.add('cart-dropdown__product-name')
        productNameSpan.innerText = 'Fall Limited Edition Sneakers';
        
        cardDescriprionWrapper.appendChild(productNameSpan)

        const priceSpan = document.createElement('span');
        priceSpan.innerText = `$125.00 x ${howMuch} `;

        let totalPriceSpan = document.createElement('span');
        totalPriceSpan.classList.add('cart-dropdown__total-prise');
        totalPriceSpan.innerText =  `$${howMuch * 125}.00`;

        priceSpan.appendChild(totalPriceSpan)

        cardDescriprionWrapper.appendChild(priceSpan)

        const deleteWrapperDiv = document.createElement('div');
        const deleteIcon = document.createElement('img');

        deleteIcon.classList.add('cart-dropdown__delete');
        deleteIcon.src = './images/icon-delete.svg';
        deleteIcon.alt = 'delete';
        deleteWrapperDiv.appendChild(deleteIcon)

        // assemble cart product

        div.appendChild(productImg);
        div.appendChild(cardDescriprionWrapper);
        div.appendChild(deleteWrapperDiv);

        // cart button

        let cartButton = document.createElement('button');
        cartButton.classList.add('cart-dropdown__btn');
        cartButton.innerText = 'Checkout';

        // ---

        let cartBtnCount = document.querySelectorAll('.cart-dropdown__btn')

        if(cartBtnCount.length === 0){
            productPlaceBox.appendChild(cartButton);
        };

        let lastChildElement = productPlaceBox.lastElementChild;

        productPlaceBox.insertBefore(div, lastChildElement);

        deleteIcon.addEventListener('click', (event) => {

            event.target.closest('.cart-dropdown__added-product').remove();

            let itemsInCart = document.querySelectorAll('.cart-dropdown__added-product');

            if(itemsInCart.length === 0 || itemsInCart.length === undefined ){
                emptyCart.classList.remove('cart-empty');
                cartButton.remove();

                howMuchIsInCart = 0;
                cartStatus.classList.add('cart-status');
                
            };
        })
 
        emptyCart.classList.add('cart-empty');
        cartButton.classList.remove('cart-empty');

    }else{
        alert('Please add product!');
        return
    }
};

// open view of image

let viewWrapper = document.querySelector('.view-image');

function closeProductView(){
    viewWrapper.classList.add('active-view')
}

function closeViewImg(event){
    console.log(event.currentTarget)
    event.currentTarget.closest('.view-image').classList.remove('active-view');
}

// slider of view image

let srcToViewImgArr = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];

let viewMainImg = document.querySelector('.view-image__img');
let viewThumbNailImg = document.querySelectorAll('.view-image__thumbnail-image-wrapper');
let viewThumbNailImgArr = [];

for(let i = 0; i < viewThumbNailImg.length; i++){
    viewThumbNailImgArr[i] = viewThumbNailImg[i]
}

let count = 1;

function nextImg(){
    if(count === 4){
        count = 0
    };

    viewMainImg.src = srcToViewImgArr[count];
    mainImg.src = srcToViewImgArr[count]

    clearImgClass(viewThumbNailImgArr)
    viewThumbNailImgArr[count].classList.add('currentImg');
    
    count++;
};

function previousImg(){
    if(count === 4){
        count = 3;
    };

    count--;

    if(count === -1){
        count = 3;
    }

    viewMainImg.src = srcToViewImgArr[count];
    mainImg.src = srcToViewImgArr[count]

    clearImgClass(viewThumbNailImgArr)
    viewThumbNailImgArr[count].classList.add('currentImg');
};

function clearImgClass(array){
    array.forEach(div => {
        div.classList.remove('currentImg')
    });
};

// ASIDE MENU 

let asideMenu = document.querySelector('[data-aside-menu]')

function openAside(){
    asideMenu.classList.remove('aside-active')
};

function closeAside(){
    asideMenu.classList.add('aside-active')
};