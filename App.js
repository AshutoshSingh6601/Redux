import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carts from "./pages/Carts";


const App = () => {

  const [cardWish, setCardWish] = useState('shop')
  
  return (
    <BrowserRouter>
    <Navbar setCardWish={setCardWish} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Carts cardWish={cardWish} />} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
