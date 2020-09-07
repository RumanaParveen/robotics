var shopItemButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < shopItemButtons.length; i++) {
        shopItemButtons[i].addEventListener('click', addItemToCart)
    }
    

function addItemToCart(event){
    
    var shopItemContainer=event.target.parentElement.parentElement;
    var priceString = shopItemContainer.getElementsByClassName('shop-item-price')[0].innerText
    var itemName = shopItemContainer.getElementsByClassName('shop-item-title')[0].innerText
    var imageUrl = shopItemContainer.getElementsByClassName('shop-item-image')[0].src

    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItemContainer.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == itemName) {
            alert('This item is already in your cart')
            return
        }
    }
    
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.innerHTML = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageUrl}" width="100" height="100">
            <span class="cart-item-title">${itemName}</span>
        </div>
        <span class="cart-price cart-column">${priceString}</span>
        `
        cartItemContainer.append(cartRow)

}
