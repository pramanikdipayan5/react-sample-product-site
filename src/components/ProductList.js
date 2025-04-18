import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../Assets/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    }
    else {
        fetchProductList();
    }
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
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