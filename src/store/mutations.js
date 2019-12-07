export default {
  addCount(state, playLoad) {
    playLoad[0].count++;
  },
  addToCart(state, playLoad) {
    state.cartList.push(playLoad);
  }
}