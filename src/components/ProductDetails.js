import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Assets/ProductDetails.css";
import { useEffect, useState } from 'react';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
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