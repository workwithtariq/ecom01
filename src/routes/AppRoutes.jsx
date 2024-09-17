import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import UpdateProductPage from "../pages/AddProductPage/UpdateProductPage";


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addproduct" element={<AddProductPage />} />
      <Route path="/updateproduct/:id" element={<UpdateProductPage />} />
      <Route path="/laptops" element={<ProductsPage category="laptops" />} />
      <Route path="/phones" element={<ProductsPage category="phones" />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/checkout/cart" element={<CartPage />} />
      <Route path="/checkout/onepagecheckout" element={<CheckoutPage />} />
    </Routes>
  </Router> 
);

export default AppRoutes;
