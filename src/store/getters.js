export default {
  cartListLength(state) {
    return state.cartList.length;
  },
  cartList(state) {
    return state.cartList
  },
  totalPrice(state) {
    let totalPrice = 0;
    state.cartList.map(i => {
      if (i.checked) {
        totalPrice += Number(i.price) * i.count;
      }
    })
    return totalPrice.toFixed(2);
  },
}
