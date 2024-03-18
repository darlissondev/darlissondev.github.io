// pega elementos do DOM
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");

// Evento para abrir e fechar o menu mobile
const toggleMenu = () => {
  navBar.classList.toggle("show-navbar");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
};

// Adiciona o toggleMenu ao botao menuBtn e closeMenuBtn
menuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
