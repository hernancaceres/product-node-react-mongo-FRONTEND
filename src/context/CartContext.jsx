import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Reducer: Adding to cart:', action.payload);
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

  console.log('Cart context state:', state);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
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
