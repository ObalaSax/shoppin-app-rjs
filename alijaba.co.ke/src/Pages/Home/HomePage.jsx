import "./Home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import product from "../../ProductData";

function HomePage() {
  return (
    <div>
      <div className="home-productItem">
        <ProductCard/>
      </div>
    </div>
  );
}

export default HomePage;