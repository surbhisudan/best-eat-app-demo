
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import statement
import Nav from './components/Nav';
import ImageSlider from './components/ImageSlider';
import Foods from './components/Foods';
import CartPage from './components/CartPage';
import HeadlineCard from './components/HeadlinCard';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`Added ${item.name} to the cart!`);
  };
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item !== itemToRemove);
    setCart(updatedCart);
  }

  return (
    <>
    <Router>
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<>
          <Nav cartItems={cart} />
          <ImageSlider />
          <HeadlineCard/>
          <Foods addToCart={addToCart} />
          <Category/>
          <Footer/>
        </>} />
        <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
        
      </Routes>
    </Router>
    
   
    </>
  );
}

export default App;

