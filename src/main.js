import {
  cargarGaleria,
  scrollInfinito,
  iniBuscador,
} from "./components/galeria/galeria.js";
import { cargarNavbar } from "./components/navbar/navbar.js";
import "./styles/style.scss";

document.addEventListener(`DOMContentLoaded`, () => {
  cargarNavbar();
  iniBuscador();
  cargarGaleria();
  scrollInfinito();
});
