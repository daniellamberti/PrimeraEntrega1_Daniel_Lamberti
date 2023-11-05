
import { CardWidget } from "../CardWidget/CardWidget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
    <img src="/Img/logo.jpg" alt="" style={{width: "50px"}}/>
    <div>
        <button className="btn btn-info mx-2">Nosotros</button>
        <button className="btn btn-info mx-2">Productos</button>
        <button className="btn btn-info mx-2">Info</button>
    </div>
    <CardWidget/>
    </nav>
  )
}

export default NavBar