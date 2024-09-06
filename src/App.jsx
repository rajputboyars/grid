import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import Category from "./components/category/Category"
import PopularProducts from "./components/popular-products/PopularProducts"
import OurApp from "./components/our-app/OurApp"
import Footer from "./components/Footer/Footer"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cart from "./components/cart/Cart"
import Wishlist from "./components/wishlist/Wishlist"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/popular-products" element={<PopularProducts />} />
        <Route path="/our-app" element={<OurApp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
