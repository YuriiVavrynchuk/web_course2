import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((printer) => printer.id === action.payload.id)) {
        return state.map((printer) => {
          if (printer.id === action.payload.id) {
            let priceForOne = printer.price / printer.quantity;
            printer.quantity++;
            printer.price += priceForOne;
            return printer;
          }
          return printer;
        });
      }
      return [...state, action.payload];
    case "INCREMENT_QTY":
      return state.map((printer) => {
        if (printer.id === action.payload) {
          let priceForOne = printer.price / printer.quantity;
          printer.quantity++;
          printer.price += priceForOne;
          return printer;
        }
        return printer;
      });
    case "DECREMENT_QTY":
      return state.map((printer) => {
        if (printer.id === action.payload && printer.quantity >= 2) {
          let priceForOne = printer.price / printer.quantity;
          printer.quantity--;
          printer.price -= priceForOne;
          return printer;
        }
        return printer;
      });
    case "REMOVE_FROM_CART":
      return state.filter(printer => printer.id !== action.payload);
    default:
      return state;
  }
};

const allReducers = combineReducers({
  cart: cartReducer,
});

export default allReducers;
