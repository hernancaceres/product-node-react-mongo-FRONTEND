import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart(); // Obtén la función de dispatch del contexto 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    console.log('Adding to cart productDetails:', product);
    // Dispatch para agregar al carrito
    dispatch({ type: 'ADD_TO_CART', payload: { id: product._id, name: product.name, category: product.category, price: product.price } });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product">
          <h3>{product.name}</h3>
          <h3>{product.category}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          <Link to={`/product/${product._id}`}>Detalles del Producto</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
