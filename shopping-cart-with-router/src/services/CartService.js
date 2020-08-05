
export const getCart = () => {
    let cart = []
    if (localStorage.getItem('cart') != undefined) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    return cart
}

export const addProductToCart = (product) => {
    let cart = getCart()
    const productFounded = cart.find(p => p.id == product.id)
    if (productFounded != undefined) {
        productFounded.qty++
    }
    else {
        cart = [...cart, { id:product.id, price:product.price, title:product.title , qty: 1 }]
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCart = (cart) => {
    if(cart!= undefined) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    else {
        localStorage.removeItem('cart')
    }
}