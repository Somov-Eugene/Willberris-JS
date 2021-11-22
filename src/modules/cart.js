const cart = () => {
  const buttonСart = document.querySelector(".button-cart");
  const modalСart = document.getElementById("modal-cart");
  const modalCartClose = modalСart.querySelector(".modal-close");
  const goodsContainer = document.querySelector(".long-goods-list");
  const cartTable = document.querySelector(".cart-table__goods");
  const modalForm = document.querySelector(".modal-form");

  const clearCart = () => {
    localStorage.removeItem("cart");
  };

  const deleteCartItem = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    const newCartArray = cartArray.filter((good) => good.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCartArray));
    renderCartGoods(newCartArray);
  };

  const plusCartItem = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    const newCartArray = cartArray.map((good) => {
      if (good.id === id) {
        good.quantity++;
      }
      return good;
    });
    localStorage.setItem("cart", JSON.stringify(newCartArray));
    renderCartGoods(newCartArray);
  };

  const minusCartItem = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    const newCartArray = cartArray.map((good) => {
      if (good.id === id) {
        good.quantity = (good.quantity > 1) ? good.quantity - 1 : 1;
      }
      return good;
    });
    localStorage.setItem("cart", JSON.stringify(newCartArray));
    renderCartGoods(newCartArray);
  };

  const addToCart = (id) => {
    const goods = JSON.parse(localStorage.getItem("goods"));
    const clickedGood = goods.find((good) => good.id === id);
    const cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    if (cartArray.some((good) => good.id === clickedGood.id)) {  // Increment quantity good's
      cartArray.map((good) => {
        if (good.id === clickedGood.id) {
          good.quantity++;
        }
        return good;
      });
    } else {  // Add new good to cart
      clickedGood.quantity = 1;
      cartArray.push(clickedGood);
    };

    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  const renderCartGoods = (goods) => {
    cartTable.innerHTML = "";
    goods.forEach((good) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${good.name}</td>
        <td>$${good.price}</td>
        <td><button class="cart-btn-minus">-</button></td>
        <td>${good.quantity}</td>
        <td><button class="cart-btn-plus">+</button></td>
        <td>${+good.quantity * +good.price}</td>
        <td><button class="cart-btn-delete">x</button></td>
      `;
      cartTable.append(tr);

      tr.addEventListener("click", (event) => {
        if (event.target.classList.contains("cart-btn-minus")) {
          minusCartItem(good.id);
        } else if (event.target.classList.contains("cart-btn-plus")) {
          plusCartItem(good.id);
        } else if (event.target.classList.contains("cart-btn-delete")) {
          deleteCartItem(good.id);
        };
      });
    });
  };

  const sendForm = (name, phone) => {
    const cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    const URL = "https://jsonplaceholder.typicode.com/posts";

    fetch(URL,
      {
        method: "POST",
        body: JSON.stringify({
          cart: cartArray,
          name: name,
          phone: phone
        })
      })
      .then(() => { // Close modal
        modalСart.style.display = "";
        clearCart();
      });

  };

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputName = modalForm.querySelector('[name="nameCustomer"]');
    const inputPhone = modalForm.querySelector('[name="phoneCustomer"]');

    sendForm(inputName.value, inputPhone.value);
    inputName.value = "";
    inputPhone.value = "";
  });

  buttonСart.addEventListener("click", () => {
    const cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    renderCartGoods(cartArray);
    modalСart.style.display = "flex";
  });

  modalCartClose.addEventListener("click", () => {
    modalСart.style.display = "";
  });

  modalСart.addEventListener("click", (event) => {
    if (!event.target.closest(".modal") && event.target.classList.contains("overlay")) {
      modalСart.style.display = "";
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalСart.style.display = "";
    }
  });

  if (goodsContainer) {
    goodsContainer.addEventListener("click", (event) => {
      const buttonToCart = event.target.closest(".add-to-cart");
      if (buttonToCart) {
        const goodId = buttonToCart.dataset.id;
        addToCart(goodId);
      }
    });
  }
};

export default cart;
