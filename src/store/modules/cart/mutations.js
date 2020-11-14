const SET_PRODUCT = (state, product) =>{
    state.cart.push(product)
}
const GET_STORE = (state, store) =>{
    state.store = store
}
const GET_SUBTOTAL = (state, product) =>{
    state.subtotal += parseFloat(product.product_value);
}
export {
    SET_PRODUCT,
    GET_STORE,
    GET_SUBTOTAL
}
