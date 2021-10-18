export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket remove
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant warn product (id: ${action.id}) as its not removing`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
