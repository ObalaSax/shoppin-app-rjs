import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import Kids from "./Pages/Kids/Kids";
import Brands from "./Pages/Brands/Brands";
import SignIn from "./Pages/SignInSignUp/SignIn";
import Footer from "../src/Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Products/Product";
import SignUp from "./Pages/SignInSignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/signup" element={<SignUp />}>

        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default App;
