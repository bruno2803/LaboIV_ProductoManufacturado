import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCarrito } from "../../hooks/useCarrito.tsx";
import Instrumento from "../../../Entidades/Instrumento.ts";
import { Button } from "@mui/material";
import Productos from "../../../Entidades/Productos.ts";
type ProductosParams = {
  id: number;
  img: string;
  categoria: string;
  descripcion: string;
  denominacion: string;
  precioVenta: string;
  tiempoEstimadoMinutos: string;
  cantidad: number;
  ProductoObject: Productos;
};

function ItemCarrito(args: ProductosParams) {
  const { cart, removeCarrito, addCarrito, limpiarCarrito, removeItemCarrito } =
    useCarrito();

  const verificaPlatoEnCarrito = (product: Productos) => {
    return cart.some((item) => item.id === product.id);
  };

  const isPlatoInCarrito = verificaPlatoEnCarrito(args.ProductoObject);
  return (
    <>
      <div className="card mb-3" style={{display: 'flex',alignItems: 'center', justifyContent:'center',height: '200px', width: "400px", marginTop: "30px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={args.img}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{args.denominacion}</h5>
              <h5 className="card-text">${args.precioVenta}</h5>
              <h5 className="card-text">
                Tiempo estimado: {args.tiempoEstimadoMinutos}
              </h5>
              <a
                className="btn"
                onClick={() => removeItemCarrito(args.ProductoObject)}
                style={{ marginRight: "5px", color: '#fff', background: '#E66200', border: '1px solid #E66200'}}
              >
                <RemoveIcon />
              </a>
              <a
                className="btn"
                onClick={() => {
                  isPlatoInCarrito
                    ? removeCarrito(args.ProductoObject)
                    : addCarrito(args.ProductoObject);
                }}
                style={{ margin: "4px", color: '#E66200', background: '#fff', border: '1px solid #E66200'}}
              >
                {isPlatoInCarrito ? (
                  <i className="fas fas fa-times"></i>
                ) : (
                  <i className="fas fa-shopping-cart"></i>
                )}
              </a>
              <a
                className="btn btn-primary"
                onClick={() => addCarrito(args.ProductoObject)}
                style={{ marginLeft: "5px", color: '#fff', background: '#E66200', border: '1px solid #E66200'}}
              >
                <AddIcon />
              </a>
              <p className="card-text">
                <small className="text-body-secondary">
                  Cantidad en el carrito: {args.cantidad}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCarrito;
