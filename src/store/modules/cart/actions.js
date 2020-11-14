const addItemToCart = (context, product) =>{
    context.commit('SET_PRODUCT', product)
}
const addStore = (context, store) =>{
    context.commit('GET_STORE', store)
}
const getSubtotal = (context, product) => {
    context.commit('GET_SUBTOTAL', product)
}
export {
    addItemToCart,
    addStore,
    getSubtotal
}
