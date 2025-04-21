import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Assets/ProductDetails.css";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProductDetails = () => {
  const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();
  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    else {
        fetchProductDetails();
    }
  }, [isLoggedIn]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  return ProductDetails ? (
    <div className="product-details-container">
      <Link to="/product-list" className="back-button">← Back to Product List</Link>
      <h1>{ProductDetails.title}</h1>
      <img src={ProductDetails.image} alt={ProductDetails.title} />
      <p>{ProductDetails.description}</p>
      <p>Price: ${ProductDetails.price}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default ProductDetails;