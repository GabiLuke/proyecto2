import { resetearGaleria } from "../galeria/galeria.js";

export function cargarNavbar() {
  const navbar = document.getElementById("navbar");

  if (!navbar) {
    console.error('No se encontró el elemento con ID "navbar"');
    return;
  }

  const navLeft = document.createElement("div");
  navLeft.className = "nav-left";

  // Logo con funcionalidad de reseteo
  const logo = document.createElement("img");
  logo.src = "/src/assets/pinterest.svg";
  logo.className = "logo";
  logo.alt = "Pinterest Logo";
  logo.style.cursor = "pointer";
  logo.addEventListener("click", resetearGaleria);
  navLeft.appendChild(logo);

  const menuButtons = [
    { name: "Inicio", active: true },
    { name: "Explorar", active: false },
    { name: "Crear", active: false },
  ];

  menuButtons.forEach((btn) => {
    const button = document.createElement("button");
    button.className = "nav-button" + (btn.active ? " active" : "");
    button.textContent = btn.name;
    button.addEventListener("click", function () {
      document.querySelectorAll(".nav-button").forEach((b) => {
        b.classList.remove("active");
      });
      this.classList.add("active");
      if (btn.name === "Inicio") {
        resetearGaleria();
      }
    });
    navLeft.appendChild(button);
  });

  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";

  const searchIcon = document.createElement("button");
  searchIcon.className = "btnBuscar";
  searchIcon.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
  searchContainer.appendChild(searchIcon);

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.className = "busqueda";
  searchBar.placeholder = "Buscar";
  searchContainer.appendChild(searchBar);

  const navRight = document.createElement("div");
  navRight.className = "nav-right";

  const iconButtons = [
    {
      name: "Notificaciones",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>',
    },
    {
      name: "Mensajes",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    },
  ];

  iconButtons.forEach((btn) => {
    const button = document.createElement("button");
    button.className = "icon-button social";
    button.setAttribute("aria-label", btn.name);
    button.innerHTML = btn.icon;
    navRight.appendChild(button);
  });

  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container";

  const profileButton = document.createElement("button");
  profileButton.className = "icon-button";
  profileButton.setAttribute("aria-label", "Perfil");
  profileButton.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
  profileContainer.appendChild(profileButton);

  const dropdown = document.createElement("div");
  dropdown.className = "profile-dropdown";

  const dropdownItems = [
    { name: "Mi perfil", url: "#" },
    { name: "Configuración", url: "#" },
    { divider: true },
    { name: "Ayuda", url: "#" },
    { name: "Cerrar sesión", url: "#" },
  ];

  dropdownItems.forEach((item) => {
    if (item.divider) {
      const divider = document.createElement("div");
      divider.className = "dropdown-divider";
      dropdown.appendChild(divider);
    } else {
      const link = document.createElement("a");
      link.className = "dropdown-item";
      link.href = item.url;
      link.textContent = item.name;
      dropdown.appendChild(link);
    }
  });

  profileContainer.appendChild(dropdown);
  navRight.appendChild(profileContainer);

  profileButton.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!profileContainer.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });

  navbar.appendChild(navLeft);
  navbar.appendChild(searchContainer);
  navbar.appendChild(navRight);

  return navbar;
}
