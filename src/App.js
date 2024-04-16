import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Components/Context/CartContext";
import LoginModal from './Components/Login/LoginModal';
import UserProfile from './Components/Profile/UserProfile';
import { AuthProvider } from './Components/Context/AuthContext';
import AvatarMenu from './Components/AvatarMenu/Avatar';
import Register from './Components/UserRegister/Register';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <AuthProvider>
      <CartProvider>
      <BrowserRouter>
        <AvatarMenu /> {AvatarMenu}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="Products" element={<ItemListContainer />} />
          <Route path="Category/:idCategory" element={<ItemListContainer />} />
          <Route path="item/:idItem" element={<ItemDetailContainer />}/>
						<Route path="/Cart" element={<Cart />} />
						<Route path="/Checkout" element={<Checkout/>} />
            <Route path="/" element={<LoginModal />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
          {/* <Route path="Nosotros" element={<Nosotros/>}/> 
          <Route path="Contacto" element={<Contacto/>}/>  */}
        </Routes>
      </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
