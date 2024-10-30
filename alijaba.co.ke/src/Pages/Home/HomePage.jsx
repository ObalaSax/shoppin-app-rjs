import "./Home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productData from "../../ProductData";
function HomePage() {
  return (
    <div>
      <div className="home-productItem">
        {productData.map((item, i) => {
          return (
            <ProductCard
              key={i}
              id={item.id}
              productName={item.productName}
              productImage={item.productImage}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
