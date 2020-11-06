const AddItemToCart = (context, product) =>{
    context.commit('SET_PRODUCT', product)
}
export {
    AddItemToCart
}
