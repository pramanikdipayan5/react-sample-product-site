import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { AuthContext } from './AuthContext';
import '../Assets/ProductList.css';

const ProductList = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    else {
        fetchProductList();
    }
  }, [isLoggedIn]);

  const fetchProductList = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  }

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}><ProductCard product={product} /></div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;