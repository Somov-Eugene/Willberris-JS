const cart = () => {
  const buttonСart = document.querySelector(".button-cart");
  const modalСart = document.getElementById("modal-cart");
  const modalCartClose = modalСart.querySelector(".modal-close");

  buttonСart.addEventListener("click", () => modalСart.style.display = "flex");
  modalCartClose.addEventListener("click", () => modalСart.style.display = "");
};

export default cart;
