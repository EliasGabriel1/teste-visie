import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/Producto/index";
import AppProvider from "./Context/AppContext";
import "./reset.css";
import "./geral.css";

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element');
const root = (ReactDOM as any).createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Producto" element={<ProductPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </AppProvider>
  </BrowserRouter>
);