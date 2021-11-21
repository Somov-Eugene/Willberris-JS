const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");

  const renderGoods = (goods) => {
    const goodsContainer = document.querySelector(".long-goods-list");
    goodsContainer.innerHTML = "";

    goods.forEach((good) => {
      const goodBlock = document.createElement("div");
      goodBlock.classList.add("col-lg-3");
      goodBlock.classList.add("col-sm-6");
      goodBlock.innerHTML = `
        <div class="goods-card">
          <span class="label${good.label ? '' : ' d-none'}">${good.label}</span>
          <img class="goods-image" src="db/${good.img}" alt="image: ${good.name}" />
          <h3 class="goods-title">${good.name}</h3>
          <p class="goods-description">${good.description}</p>
          <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
            <span class="button-price">$${good.price}</span>
          </button>
        </div>
      `;
      goodsContainer.append(goodBlock);
    });
  };

  const getData = (value, category) => {
    // const URL = "/db/db.json";
    const URL = "https://test-73003-default-rtdb.firebaseio.com/db.json";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = category ? data.filter((item) => item[category] === value) : data;
        localStorage.setItem("goods", JSON.stringify(filteredData));

        if (window.location.pathname !== "/goods.html") {
          window.location.href = "goods.html";
        } else {
          renderGoods(filteredData);
        }
      });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const linkValue = link.textContent;
      const category = link.dataset.field;
      getData(linkValue, category);
    });
  });

  const goods = localStorage.getItem("goods");
  if (goods && window.location.pathname.includes("goods.html")) {
    renderGoods(JSON.parse(goods));
  }

  if (window.location.pathname.includes("index.html")) {
    document.querySelector(".more").addEventListener("click", (event) => {
      event.preventDefault();
      getData("All", "");
    });
  }
};

export default getGoods;
