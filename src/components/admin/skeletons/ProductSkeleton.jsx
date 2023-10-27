const ProductsSkeleton = () => {
  return (
    <div className="products-skeleton">
      <div className="skeleton skeleton-header"></div>

      <div className="skeleton skeleton-container">
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>

      <div className="skeleton skeleton-buttons d-block m-auto"></div>
    </div>
  );
};
export default ProductsSkeleton;
