import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
let galeria = document.querySelector("#galeria");
let busqueda = ``;
let pagina = 1;
let cargando = false;
let msnry;

export async function cargarGaleria() {
  let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}`;

  if (cargando) return;
  cargando = true;

  if (busqueda === ``) {
    url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=40`;
  } else {
    url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${busqueda}&page=${pagina}&per_page=20`;
  }

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    let imagenes = [];
    if (busqueda === ``) {
      imagenes = data;
    } else {
      imagenes = data.results;
    }

    const promises = imagenes.map((imagen) => {
      return new Promise((resolve) => {
        const pin = document.createElement("div");
        pin.classList.add("pin", "grid-item");

        const pin_img = document.createElement("div");
        pin_img.classList.add("pin-img");
        pin.appendChild(pin_img);

        const img = document.createElement("img");
        img.src = imagen.urls.small;
        img.alt = imagen.alt_description || "Imagen de Unsplash";
        pin_img.appendChild(img);

        const foto_perfil = document.createElement("img");
        foto_perfil.src = imagen.user.profile_image.medium;
        foto_perfil.alt = imagen.user.name;
        foto_perfil.classList.add("foto-perfil");
        pin.appendChild(foto_perfil);

        const infoBloque = document.createElement("div");
        infoBloque.classList.add("info-bloque");

        const perfil_nombre = document.createElement("p");
        perfil_nombre.textContent = `${imagen.user.name}`;
        perfil_nombre.classList.add("perfil-nombre");
        infoBloque.appendChild(perfil_nombre);

        const fecha = document.createElement("p");
        fecha.textContent = `Fecha de subida: ${new Date(
          imagen.updated_at
        ).toLocaleDateString()}`;
        fecha.classList.add("fecha");
        infoBloque.appendChild(fecha);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const btnDesc = document.createElement("button");
        btnDesc.classList.add("btn", "btn-descargas");
        btnDesc.innerHTML = `💾 ${imagen.downloads}`;
        overlay.appendChild(btnDesc);

        const btnLike = document.createElement("button");
        btnLike.classList.add("btn", "btn-likes");
        btnLike.innerHTML = `🧡 ${imagen.likes}`;
        overlay.appendChild(btnLike);

        const btnVisitar = document.createElement("button");
        btnVisitar.classList.add("btn", "btn-visitar");
        btnVisitar.innerHTML = "Visitar";

        btnVisitar.addEventListener("click", () => {
          window.open(imagen.links.html, "_blank");
        });
        overlay.appendChild(btnVisitar);
        pin_img.appendChild(overlay);
        pin.appendChild(infoBloque);

        galeria.appendChild(pin);

        imagesLoaded(pin, () => {
          resolve();
        });
      });
    });

    await Promise.all(promises);

    if (!msnry) {
      msnry = new Masonry(galeria, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 10,
      });
    } else {
      msnry.reloadItems();
      msnry.layout();
    }

    pagina++;
  } catch (error) {
    console.error("Error al cargar la galería:", error);
  } finally {
    cargando = false;
  }
}

export function iniBuscador() {
  const btnBuscar = document.querySelector(".btnBuscar");
  const inputBusqueda = document.querySelector(".busqueda");

  if (!btnBuscar || !inputBusqueda) return;

  btnBuscar.addEventListener("click", () => {
    galeria.innerHTML = `<div class="grid-sizer"></div>`;
    pagina = 1;
    busqueda = inputBusqueda.value.trim();
    if (msnry) {
      msnry.destroy();
      msnry = null;
    }
    cargarGaleria();
    inputBusqueda.value = "";
  });

  inputBusqueda.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnBuscar.click();
  });
}

export function scrollInfinito() {
  const centinela = document.querySelector("#centinela");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !cargando) {
          cargarGaleria();
        }
      });
    },
    {
      rootMargin: "500px",
      threshold: 0.1,
    }
  );

  observer.observe(centinela);
}

// Función para resetear a la vista inicial
export function resetearGaleria() {
  galeria.innerHTML = `<div class="grid-sizer"></div>`;
  pagina = 1;
  busqueda = "";
  if (msnry) {
    msnry.destroy();
    msnry = null;
  }
  cargarGaleria();
}
