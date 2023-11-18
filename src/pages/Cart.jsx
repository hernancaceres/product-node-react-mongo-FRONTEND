
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems } = useCart();
    console.log('Cart items:', cartItems);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.category} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
