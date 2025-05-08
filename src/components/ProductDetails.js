import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Assets/ProductDetails.css";
//import { useEffect, useState } from 'react';
//import { useEffect, useState, useContext } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDetailsShimmer from '../Utils/ProductDetailsShimmer';
//import { AuthContext } from './AuthContext';

const ProductDetails = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const { id } = useParams();
  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    else {
      fetchProductDetails();
    }
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  return ProductDetails ? 
  (
    <div className="product-details-container">
      <Link to="/product-list" className="back-button">← Back to Product List</Link>
      <h1>{ProductDetails.title}</h1>
      <img src={ProductDetails.image} alt={ProductDetails.title} />
      <p>{ProductDetails.description}</p>
      <p>Price: ${ProductDetails.price}</p>
    </div>
  ) : 
  <ProductDetailsShimmer />
}

export default ProductDetails;