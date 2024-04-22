import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Components/Context/CartContext";
import   Footer    from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="Products" element={<ItemListContainer />} />
          <Route path="Category/:idCategory" element={<ItemListContainer />} />
          <Route path="item/:idItem" element={<ItemDetailContainer />}/>
					<Route path="/Cart" element={<Cart />} />
					<Route path="/Checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
