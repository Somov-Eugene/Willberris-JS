const search = () => {
  const input = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");

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

  const getData = (value) => {
    // const URL = "/db/db.json";
    const URL = "https://test-73003-default-rtdb.firebaseio.com/db.json";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((good) => good.name.toLowerCase().includes(value.toLowerCase()));
        localStorage.setItem("goods", JSON.stringify(filteredData));

        if (window.location.pathname !== "/goods.html") {
          window.location.href = "goods.html";
        } else {
          renderGoods(filteredData);
        }
      });
  };

  searchBtn.addEventListener("click", () => {
    getData(input.value);
    input.value = "";
  });
};

export default search;
