import Bus from "./../Tools/Bus"
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
        cart = [...cart, { id: product.id, price: product.price, title: product.title, qty: 1 }]
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    getNumberOfProducts()
}

export const updateCart = (cart) => {
    if (cart != undefined) {
        localStorage.setItem('cart', JSON.stringify(cart))
        getNumberOfProducts()
    }
    else {
        localStorage.removeItem('cart')
        getNumberOfProducts()
    }

}

export const getNumberOfProducts = () => {
    let cart = getCart()
    let total = 0
    cart.forEach(element => {
        total += element.qty
    });
    Bus.$emit("updateNumberProduct", total)
}

export const getNumberOfProductsWithPromise = () => {
    let p = new Promise((resolve, reject) => {
        let cart = getCart()
        let total = 0
        cart.forEach(element => {
            total += element.qty
        });
        //Bus.$emit("updateNumberProduct", total)
        resolve(total)
    })

    return p
}