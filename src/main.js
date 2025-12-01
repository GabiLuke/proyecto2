import { cargarGaleria } from "./app.js";
import { scrollInfinito } from "./app.js";
import { cargarNavbar } from "./navbar.js";
import { iniBuscador } from "./app.js";
import "./style.scss";

document.addEventListener(`DOMContentLoaded`, () => {
  cargarGaleria();
  cargarNavbar();
  iniBuscador();
  scrollInfinito();
});
