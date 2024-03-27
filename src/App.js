import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import { CartContext, CartProvider } from "./Components/Context/CartContext";
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
          <Route path="Nosotros" element={<Nosotros/>}/> 
          <Route path="Contacto" element={<Contacto/>}/> 
         
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
