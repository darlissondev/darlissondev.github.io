const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");

// Funcao para abrir e fechar o menu mobile
const toggleMenu = () => {
  navBar.classList.toggle("show-navbar");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
};

// Adicionar o evento ao botoes de abrir e fechar o menu mobile
menuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
