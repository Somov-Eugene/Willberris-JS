const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");

  const getData = () => {
    // const URL = "/db/db.json";
    const URL = "https://test-73003-default-rtdb.firebaseio.com/db.json";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("goods", JSON.stringify(data));
      });
  };

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      getData();
    });
  });

  // const goods = JSON.parse(localStorage.getItem("goods"));
};

getGoods();
