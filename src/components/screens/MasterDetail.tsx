import { useEffect, useState } from "react";
import { MasterDetailModal } from "../ui/modals/MasterDetailModal/MasterDetailModal";
import { NavBar } from "../ui/NavBar/NavBar";
import { TableGeneric } from "../ui/tables/TableGeneric/TableGeneric";
import { IProductoManufacturado } from "../../types/IProductoManufacturado";
import { ProductoManufacturadoService } from "../../services/ProductoManufacturadoService";
import { useAppDispatch } from "../../hooks/redux";
import {
  removeElementActive,
  setDataTable,
} from "../../redux/slices/TablaReducer";
import { Button, CircularProgress, colors } from "@mui/material";
import { orange } from "@mui/material/colors";
// Definición de la URL base de la API
const API_URL = import.meta.env.VITE_API_URL;

const ColumnsProductosManufacturados = [
  { label: "Id", key: "id" },
  { label: "Nombre", key: "denominacion" },
  {
    label: "Categoria",
    key: "categoria",
    render: (element: IProductoManufacturado) => element.categoria.denominacion,
  },
  {
    label: "Tiempo de cocina",
    key: "tiempoEstimadoMinutos",
  },
  {
    label: "Habilitado",
    key: "alta",
    render: (element: IProductoManufacturado) => (element.alta ? "Si" : "No"),
  },
  {
    label: "Precio",
    key: "precioVenta",
  },
  {
    label: "Agregar al carrito",
    key: "agregar",
  },
];

export const MasterDetail = () => {
  //manejo de estado del modal
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch(removeElementActive()); //al cerrar el modal siempre reseteamos el elemento activo
  };

  //instanciamos el loader de la carga de datos
  const [loading, setLoading] = useState<boolean>(false);

  //instanciamos el dispatch
  const dispatch = useAppDispatch();

  //instanciamos los servicios
  const productoManufacturadoService = new ProductoManufacturadoService(
    `${API_URL}/producto_manufacturado`
  );

  // Función para obtener los productos manufacturados
  const getDataTable = async () => {
    await productoManufacturadoService.getAll().then((dataTable) => {
      dispatch(setDataTable(dataTable));
      setLoading(false);
    });
  };

  // Efecto para cargar los datos al inicio
  useEffect(() => {
    setLoading(true);
    getDataTable();
  }, []);

  //funcion para agregar un producto al carrito
  const handleCartShop = async (id: number | string) => {
    await productoManufacturadoService.delete(id);
    dispatch(removeElementActive());
    getDataTable();
  };

  //funcion para eleminar un elemento
  const handleDelete = async (id: number | string) => {
    await productoManufacturadoService.delete(id);
    dispatch(removeElementActive());
    getDataTable();
  };

  //funcion para dar de baja o alta un elemento
  const handleCancelOrRegister = async (
    id: number | string,
    data: IProductoManufacturado
  ) => {
    await productoManufacturadoService.put(id, data);
    dispatch(removeElementActive());
    getDataTable();
  };

  return (
    <div>
      <NavBar />
      
      <div
        style={{
          height: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/*<div
          style={{
            height: "100%",
            width: "50%",
            padding: "20px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setOpenModal(true);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:"#E66200"
            }}
          >
            <span className="material-symbols-outlined">add</span>
          </Button>
        </div>*/}
      </div>

      {!loading ? (
        // Mostrar la tabla de personas una vez que los datos se han cargado
        <TableGeneric<IProductoManufacturado>
          handleCartShop={handleCartShop}
          handleDelete={handleDelete}
          columns={ColumnsProductosManufacturados}
          setOpenModal={setOpenModal}
          handleCancelOrRegister={handleCancelOrRegister}
          disabled
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <MasterDetailModal
        getData={getDataTable}
        open={openModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
};
