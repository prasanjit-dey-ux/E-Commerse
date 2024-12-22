import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { SearchBar } from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

function App() {

  return (
    <div className = "px-4 sm:px-5vw md:px-7vw lg:px-9vw">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/verify" element={<Verify/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App