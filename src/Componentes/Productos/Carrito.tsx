import { useCarrito } from "../../hooks/useCarrito.tsx";
import Instrumento from "../../../Entidades/Instrumento";
import ItemCarrito from "./ItemCarrito.tsx";
import { Button } from "@mui/material";
import Pedido from "../../../Entidades/Pedido.ts";
import { useEffect, useState } from "react";
import DetallePedido from "../../../Entidades/DetallePedido.ts";
import { getAllInstrumentos } from "../../../Servicios/FuncionesApi.ts";
import Productos from "../../../Entidades/Productos.ts";

export const Carrito = () => {
  const [instrumentosCoincidentes, setInstrumentosCoincidentes] = useState<
    Instrumento[]
  >([]);
  const { cart, limpiarCarrito } = useCarrito();
  const [pedido, setPedido] = useState<Pedido>(new Pedido());
  const [detallepedido, setDetallePedido] = useState<DetallePedido>(
    new DetallePedido()
  );
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  useEffect(() => {
    getInstrumentos();
  }, []);
  return (
    <>
      <div
        style={{
          maxHeight: "20px",
          marginTop: "100px",
          display: "flex",
          alignItems: 'center',
          justifyContent:'center',
        }}
      >
        <p style={{ margin: 10 }}>CARRITO DE COMPRAS:</p>
        <Button
          variant="outlined"
          size="small"
          style={{ margin: "10px" }}
          onClick={limpiarCarrito}
        >
          Vaciar carrito
        </Button>
        <Button variant="outlined" size="small" style={{ margin: "10px" }}>
          Enviar Pedido
        </Button>
      </div>
      <div style={{display: 'flex', padding: '30px', alignItems: 'center', justifyContent:'center'}}>
      {cart.length === 0 ? (
        <p style={{color:'red'}}>¡EL CARRITO ESTA VACIO!</p>
      ) : (
        cart.map((product: Productos) => (
          <ItemCarrito
            key={product.id}
            id={product.id}
            categoria={product.categoria}
            denominacion={product.denominacion}
            precioVenta={product.precioVenta}
            tiempoEstimadoMinutos={product.tiempoEstimadoMinutos}
            descripcion={product.descripción}
            cantidad={product.cantidad}
            img={product.img}
            ProductoObject={product}
          ></ItemCarrito>
        ))
      )}
      </div>
    </>
  );
};
