import "./styles.css";
import CartWidget from "../common/cartwidget"

function Navbar() {
  return (
    <nav>
      <h4>FORKLIFT SERVICES</h4>

      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar