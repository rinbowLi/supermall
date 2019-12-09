export default {
  addCount(state, playLoad) {
    playLoad[0].count++;
  },
  addToCart(state, playLoad) {
    playLoad.checked = false;
    state.cartList.push(playLoad);
  },
  checkAll(state, playLoad) {
    console.log(playLoad)
    state.cartList.map(i => {
      i.checked = playLoad;
    })
  }
}
