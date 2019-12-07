export default{
  addToCart({state,commit}, playLoad) {
    let oldProduct = state.cartList.filter(item => {
      return item.iid === playLoad.iid;
    })
    if (oldProduct.length > 0) {
      commit("addCount",oldProduct);
    } else {
      playLoad.count = 1;
      commit("addToCart",playLoad);
    }
  }
}