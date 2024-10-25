import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Brands from "./Pages/Brands";
import SignIn from "./Pages/SignInSignUp";
import Footer from "../src/Components/Footer";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/home" element={<HomePage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
