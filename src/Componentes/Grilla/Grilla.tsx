import { SetStateAction, useEffect, useState } from "react";
import Instrumento from "../../../Entidades/Instrumento";
import {
  deleteInstrumento,
  getAllCategorias,
  getAllInstrumentos,
  getProductosJson,
} from "../../../Servicios/FuncionesApi";
import { NavBar } from "../Commons/NavBar";
import "../styles.css";
import Categorias from "../../../Entidades/Categorias";
import Productos from "../../../Entidades/Productos";
import { useCarrito } from "../../hooks/useCarrito.tsx";

export const Grilla = () => {
  const { cart, addCarrito } = useCarrito();
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [productos, setProductos] = useState<Productos[]>([]);
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  {
    /*Nota: Primero correr Json server con npm run server*/
  }
  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  const getProductos = async () => {
    const datos: Productos[] = await getProductosJson();
    setProductos(datos);
  };

  const getCategorias = async () => {
    const datos: Categorias[] = await getAllCategorias();
    setCategorias(datos);
  };
  const deleteInstru = async (idInstru: number) => {
    deleteInstrumento(idInstru);
    window.location.reload();
  };

  useEffect(() => {
    getInstrumentos();
    getCategorias();
    getProductos();
  }, []);

  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const handleChangeCategoria = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategoriaFiltro(e.target.value);
  };

  const filteredInstrumentos = categoriaFiltro
    ? instrumentos.filter(
        (instrumento) => instrumento.categoria.denominacion === categoriaFiltro
      )
    : instrumentos;

  return (
    <>
      <div className="Grilla">
        <div className="row" style={{marginBottom:'25px', padding:'10px', border:'1px solid #BCBCBC', borderRadius:'5px'}}>
          <div className="col">
            <b>Imagen</b>
          </div>
          <div className="col">
            <b>Producto</b>
          </div>
          <div className="col">
            <b>Categoría</b>
          </div>
          <div className="col">
            <b>Precio</b>
          </div>
          <div className="col">
            <b>Tiempo</b>
          </div>
          <div className="col">
            <b>Descripción</b>
          </div>
          <div className="col">
            <b>Carrito</b>
          </div>
        </div>
        {productos.map((product: Productos) => (
          <div className="row" key={product.id}>
            <div className="col">
              <img
                style={{ width: "55px" }}
                src={product.img}
                className="img-fluid rounded-start"
                alt="..."
              ></img>
            </div>
            <div className="col">{product.denominacion}</div>
            <div className="col">{product.categoria}</div>
            <div className="col">${product.precioVenta}</div>
            <div className="col">{product.tiempoEstimadoMinutos} min</div>
            <div className="col">{product.descripción}</div>
            <div className="col">
              <a
                className="btn"
                style={{ margin: 10, color: '#FFF', background: '#E66200'}}
                onClick={() => addCarrito(product)}
              >
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
