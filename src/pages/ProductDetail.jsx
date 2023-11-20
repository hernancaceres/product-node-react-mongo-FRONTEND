import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart(); // Obtén la función de dispatch del contexto

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    // Dispatch para agregar al carrito
    dispatch({ type: 'ADD_TO_CART', payload: { id: product._id, name: product.name, category: product.category, price: product.price } });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
      {/* Puedes agregar más detalles del producto aquí */}
    </div>
  );
};

export default ProductDetail;
