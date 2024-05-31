import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Componentes/App.tsx";
import { DetalleInstrumento } from "./Componentes/Productos/DetalleInstrumento.tsx";
import { Home } from "./Componentes/Home/Home.tsx";
import { DondeEstamos } from "./Componentes/DondeEstamos/DondeEstamos.tsx";
import { Grilla } from "./Componentes/Grilla/Grilla.tsx";
import { Agregar } from "./Componentes/Grilla/Agregar.tsx";
import { Carrito } from "./Componentes/Productos/Carrito.tsx";
import { CarritoContextProvider } from "./context/CarritoContext.tsx";
import { NavBar } from "./Componentes/Commons/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoContextProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/App" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DondeEstamos" element={<DondeEstamos />} />
          <Route
            path="/Detalle/:idinstrumento"
            element={<DetalleInstrumento />}
          />
          <Route path="*" element={<Home />} />
          <Route path="/Grilla" element={<Grilla />} />
          <Route path="/Agregar/:idinstrumento" element={<Agregar />} />
          <Route path="/Carrito" element={<Carrito />}></Route>
        </Routes>
      </CarritoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
