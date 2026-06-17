import "./App.css";
import { supabase } from "./supabase.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products1 from "./Pages/Products1";

function App() {
  return (
    <>
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products1/>}/>
      </Routes>

      <Hero/>
      <Categories/>
      <Products/>
      <Testimonials/>
      <Footer/>
    
    </>
  );
}

export default App;
 