import { Link } from "react-router-dom";
import "../Assets/ProductCard.css";

const ProductCard = ({ product }) => {
return (
    <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`}>Read More</Link>
        </div>
    </div>
);
}

export default ProductCard;