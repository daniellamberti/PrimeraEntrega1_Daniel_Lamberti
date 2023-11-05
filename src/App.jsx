import { NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi Tienda Online"} />
    </>
  )
}

export default App

