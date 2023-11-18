import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Lógica para agregar productos al carrito
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // Otros casos para manejar acciones como 'REMOVE_FROM_CART', 'CLEAR_CART', etc.
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};
