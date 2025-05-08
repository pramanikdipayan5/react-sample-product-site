import '../Assets/ProductListShimmer.css';

const ProductListShimmer = () => {
  return (
    <div className="product-list-shimmer-container">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-price"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductListShimmer;