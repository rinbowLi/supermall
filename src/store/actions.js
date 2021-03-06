export default{
  addToCart({state,commit}, playLoad) {
    return new Promise((resolve) =>{
      let oldProduct = state.cartList.filter(item => {
        return item.iid === playLoad.iid;
      })
      if (oldProduct.length > 0) {
        commit("addCount",oldProduct);
        resolve("数量加一")
      } else {
        playLoad.count = 1;
        commit("addToCart",playLoad);
        resolve("加入购物车")
      }
    })
   
  }
}