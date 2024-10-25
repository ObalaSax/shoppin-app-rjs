import "./ProductCard.css";
import pic from "../../assets/5.jpg";

function ProductCard(props) {
  return (
    <div className="productCard">
      <div className="productCard-container">
        <img src={props.productImage} alt="Product Image" />
        <h3>{props.productName}</h3>
        <div className="product-newPrice">
          <p>Now: {props.newPrice}</p>
        </div>
        <div className="product-oldPrice">
          <p>Was: {props.oldPrice}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
