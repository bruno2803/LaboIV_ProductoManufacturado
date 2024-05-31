import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useCarrito } from "../../hooks/useCarrito.tsx";
export const NavBar = () => {
  const { cart } = useCarrito();

  let tiene: boolean = false;
  if (cart.length >= 1) {
    tiene = true;
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Grilla">
                Grilla de Productos
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex ms-auto position-relative">
          <a
            className="nav-link"
            href="/Carrito"
            style={{ marginRight: "20px" }}
          >
            <i className="fas fa-shopping-cart"></i>
            {tiene && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};
