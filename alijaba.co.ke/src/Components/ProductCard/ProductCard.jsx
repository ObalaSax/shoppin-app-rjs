import "./ProductCard.css";
import productData from "../../ProductData";

function ProductCard(props) {
  return (
    <div className="productCard">
      <div className="productCard-container">
        <img src={props.productImage} alt="Product Image" />
        <h3>{props.productName}</h3>
        <p>{props.newPrice}</p>
        <p>{props.oldPrice}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
