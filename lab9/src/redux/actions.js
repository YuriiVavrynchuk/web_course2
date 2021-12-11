export const addToCart = (printer) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: printer.id,
      brand: printer.brand,
      power: printer.power,
      price: printer.price,
      quantity: 1,
    },
  };
};

export const increment = (id) => {
  return { type: "INCREMENT_QTY", payload: id };
};

export const decrement = (id) => {
  return { type: "DECREMENT_QTY", payload: id };
};

export const remove = (id) => {
  return { type: "REMOVE_FROM_CART", payload: id };
};
