import * as ActionType from "./../contanst/actionType";

let initialState = {
  currentUser: {},
  cart: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      state.currentUser = action.currentUser;
      return { ...state };

    case "ADD_TO_CART": {
      let cartUpdate = [...state.cart];

      let index = cartUpdate.findIndex(
        sp => sp.maPhim === action.itemCart.maPhim
      );
      if (index !== -1) {
        cartUpdate[index] = cartUpdate[index];
      } else {
        cartUpdate.push(action.itemCart);
      }

      state.cart = cartUpdate;
      return { ...state };
    }
    case "DELETE_ITEM": {
      let cartUpdate = [...state.cart];
      cartUpdate.splice(action.index, 1);
      state.cart = cartUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
