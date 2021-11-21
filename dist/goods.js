(()=>{"use strict";var __webpack_modules__={220:()=>{eval('\n;// CONCATENATED MODULE: ./src/modules/cart.js\nconst cart = () => {\n  const buttonСart = document.querySelector(".button-cart");\n  const modalСart = document.getElementById("modal-cart");\n  const modalCartClose = modalСart.querySelector(".modal-close");\n\n  buttonСart.addEventListener("click", () => modalСart.style.display = "flex");\n  modalCartClose.addEventListener("click", () => modalСart.style.display = "");\n};\n\n/* harmony default export */ const modules_cart = (cart);\n\n;// CONCATENATED MODULE: ./src/modules/search.js\nconst search = () => {\n  const input = document.querySelector(".search-block > input");\n  const searchBtn = document.querySelector(".search-block > button");\n\n  const renderGoods = (goods) => {\n    const goodsContainer = document.querySelector(".long-goods-list");\n    goodsContainer.innerHTML = "";\n\n    goods.forEach((good) => {\n      const goodBlock = document.createElement("div");\n      goodBlock.classList.add("col-lg-3");\n      goodBlock.classList.add("col-sm-6");\n      goodBlock.innerHTML = `\n        <div class="goods-card">\n          <span class="label${good.label ? \'\' : \' d-none\'}">${good.label}</span>\n          <img class="goods-image" src="db/${good.img}" alt="image: ${good.name}" />\n          <h3 class="goods-title">${good.name}</h3>\n          <p class="goods-description">${good.description}</p>\n          <button class="button goods-card-btn add-to-cart" data-id="${good.id}">\n            <span class="button-price">$${good.price}</span>\n          </button>\n        </div>\n      `;\n      goodsContainer.append(goodBlock);\n    });\n  };\n\n  const getData = (value) => {\n    // const URL = "/db/db.json";\n    const URL = "https://test-73003-default-rtdb.firebaseio.com/db.json";\n\n    fetch(URL)\n      .then((res) => res.json())\n      .then((data) => {\n        const filteredData = data.filter((good) => good.name.toLowerCase().includes(value.toLowerCase()));\n        localStorage.setItem("goods", JSON.stringify(filteredData));\n\n        if (window.location.pathname !== "/goods.html") {\n          window.location.href = "goods.html";\n        } else {\n          renderGoods(filteredData);\n        }\n      });\n  };\n\n  searchBtn.addEventListener("click", () => {\n    getData(input.value);\n    input.value = "";\n  });\n};\n\n/* harmony default export */ const modules_search = (search);\n\n;// CONCATENATED MODULE: ./src/modules/getGoods.js\nconst getGoods = () => {\n  const links = document.querySelectorAll(".navigation-link");\n\n  const renderGoods = (goods) => {\n    const goodsContainer = document.querySelector(".long-goods-list");\n    goodsContainer.innerHTML = "";\n\n    goods.forEach((good) => {\n      const goodBlock = document.createElement("div");\n      goodBlock.classList.add("col-lg-3");\n      goodBlock.classList.add("col-sm-6");\n      goodBlock.innerHTML = `\n        <div class="goods-card">\n          <span class="label${good.label ? \'\' : \' d-none\'}">${good.label}</span>\n          <img class="goods-image" src="db/${good.img}" alt="image: ${good.name}" />\n          <h3 class="goods-title">${good.name}</h3>\n          <p class="goods-description">${good.description}</p>\n          <button class="button goods-card-btn add-to-cart" data-id="${good.id}">\n            <span class="button-price">$${good.price}</span>\n          </button>\n        </div>\n      `;\n      goodsContainer.append(goodBlock);\n    });\n  };\n\n  const getData = (value, category) => {\n    // const URL = "/db/db.json";\n    const URL = "https://test-73003-default-rtdb.firebaseio.com/db.json";\n\n    fetch(URL)\n      .then((res) => res.json())\n      .then((data) => {\n        const filteredData = category ? data.filter((item) => item[category] === value) : data;\n        localStorage.setItem("goods", JSON.stringify(filteredData));\n\n        if (window.location.pathname !== "/goods.html") {\n          window.location.href = "goods.html";\n        } else {\n          renderGoods(filteredData);\n        }\n      });\n  };\n\n  links.forEach((link) => {\n    link.addEventListener("click", (event) => {\n      event.preventDefault();\n\n      const linkValue = link.textContent;\n      const category = link.dataset.field;\n      getData(linkValue, category);\n    });\n  });\n\n  const goods = localStorage.getItem("goods");\n  if (goods && window.location.pathname === "/goods.html") {\n    renderGoods(JSON.parse(goods));\n  }\n\n  if (window.location.pathname === "/index.html") {\n    document.querySelector(".more").addEventListener("click", (event) => {\n      event.preventDefault();\n      getData("All", "");\n    });\n  }\n};\n\n/* harmony default export */ const modules_getGoods = (getGoods);\n\n;// CONCATENATED MODULE: ./src/goods.js\n\n\n\n\nmodules_cart();\nmodules_search();\nmodules_getGoods();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFlLElBQUksRUFBQzs7O0FDVHBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QixJQUFJLFdBQVc7QUFDekUsNkNBQTZDLFNBQVMsZ0JBQWdCLFVBQVU7QUFDaEYsb0NBQW9DLFVBQVU7QUFDOUMseUNBQXlDLGlCQUFpQjtBQUMxRCx1RUFBdUUsUUFBUTtBQUMvRSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHFEQUFlLE1BQU0sRUFBQzs7O0FDbkR0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCLElBQUksV0FBVztBQUN6RSw2Q0FBNkMsU0FBUyxnQkFBZ0IsVUFBVTtBQUNoRixvQ0FBb0MsVUFBVTtBQUM5Qyx5Q0FBeUMsaUJBQWlCO0FBQzFELHVFQUF1RSxRQUFRO0FBQy9FLDBDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSx1REFBZSxRQUFRLEVBQUM7OztBQ25FVTtBQUNJO0FBQ0k7O0FBRTFDLFlBQUk7QUFDSixjQUFNO0FBQ04sZ0JBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxsYmVycmlzLWpzLy4vc3JjL21vZHVsZXMvY2FydC5qcz9hYzBlIiwid2VicGFjazovL3dpbGxiZXJyaXMtanMvLi9zcmMvbW9kdWxlcy9zZWFyY2guanM/ZTA3NSIsIndlYnBhY2s6Ly93aWxsYmVycmlzLWpzLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSIsIndlYnBhY2s6Ly93aWxsYmVycmlzLWpzLy4vc3JjL2dvb2RzLmpzPzdiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9u0KFhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jYXJ0XCIpO1xuICBjb25zdCBtb2RhbNChYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jYXJ0XCIpO1xuICBjb25zdCBtb2RhbENhcnRDbG9zZSA9IG1vZGFs0KFhcnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcblxuICBidXR0b27QoWFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWzQoWFydC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuICBtb2RhbENhcnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWzQoWFydC5zdHlsZS5kaXNwbGF5ID0gXCJcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJsb2NrID4gaW5wdXRcIik7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJsb2NrID4gYnV0dG9uXCIpO1xuXG4gIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XG4gICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvbmctZ29vZHMtbGlzdFwiKTtcbiAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ29vZHMuZm9yRWFjaCgoZ29vZCkgPT4ge1xuICAgICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKFwiY29sLWxnLTNcIik7XG4gICAgICBnb29kQmxvY2suY2xhc3NMaXN0LmFkZChcImNvbC1zbS02XCIpO1xuICAgICAgZ29vZEJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsJHtnb29kLmxhYmVsID8gJycgOiAnIGQtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIiBzcmM9XCJkYi8ke2dvb2QuaW1nfVwiIGFsdD1cImltYWdlOiAke2dvb2QubmFtZX1cIiAvPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cImdvb2RzLWRlc2NyaXB0aW9uXCI+JHtnb29kLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdvb2RzLWNhcmQtYnRuIGFkZC10by1jYXJ0XCIgZGF0YS1pZD1cIiR7Z29vZC5pZH1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLXByaWNlXCI+JCR7Z29vZC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGdvb2RzQ29udGFpbmVyLmFwcGVuZChnb29kQmxvY2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGEgPSAodmFsdWUpID0+IHtcbiAgICAvLyBjb25zdCBVUkwgPSBcIi9kYi9kYi5qc29uXCI7XG4gICAgY29uc3QgVVJMID0gXCJodHRwczovL3Rlc3QtNzMwMDMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiLmpzb25cIjtcblxuICAgIGZldGNoKFVSTClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZ29vZCkgPT4gZ29vZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdvb2RzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkRGF0YSkpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2dvb2RzLmh0bWxcIikge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJnb29kcy5odG1sXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyR29vZHMoZmlsdGVyZWREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2V0RGF0YShpbnB1dC52YWx1ZSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsImNvbnN0IGdldEdvb2RzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbi1saW5rXCIpO1xuXG4gIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XG4gICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvbmctZ29vZHMtbGlzdFwiKTtcbiAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ29vZHMuZm9yRWFjaCgoZ29vZCkgPT4ge1xuICAgICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKFwiY29sLWxnLTNcIik7XG4gICAgICBnb29kQmxvY2suY2xhc3NMaXN0LmFkZChcImNvbC1zbS02XCIpO1xuICAgICAgZ29vZEJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsJHtnb29kLmxhYmVsID8gJycgOiAnIGQtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIiBzcmM9XCJkYi8ke2dvb2QuaW1nfVwiIGFsdD1cImltYWdlOiAke2dvb2QubmFtZX1cIiAvPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cImdvb2RzLWRlc2NyaXB0aW9uXCI+JHtnb29kLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdvb2RzLWNhcmQtYnRuIGFkZC10by1jYXJ0XCIgZGF0YS1pZD1cIiR7Z29vZC5pZH1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLXByaWNlXCI+JCR7Z29vZC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGdvb2RzQ29udGFpbmVyLmFwcGVuZChnb29kQmxvY2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGEgPSAodmFsdWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgLy8gY29uc3QgVVJMID0gXCIvZGIvZGIuanNvblwiO1xuICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly90ZXN0LTczMDAzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi5qc29uXCI7XG5cbiAgICBmZXRjaChVUkwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gY2F0ZWdvcnkgPyBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtjYXRlZ29yeV0gPT09IHZhbHVlKSA6IGRhdGE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ29vZHNcIiwgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWREYXRhKSk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvZ29vZHMuaHRtbFwiKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImdvb2RzLmh0bWxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW5kZXJHb29kcyhmaWx0ZXJlZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBsaW5rVmFsdWUgPSBsaW5rLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBsaW5rLmRhdGFzZXQuZmllbGQ7XG4gICAgICBnZXREYXRhKGxpbmtWYWx1ZSwgY2F0ZWdvcnkpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBnb29kcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ29vZHNcIik7XG4gIGlmIChnb29kcyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dvb2RzLmh0bWxcIikge1xuICAgIHJlbmRlckdvb2RzKEpTT04ucGFyc2UoZ29vZHMpKTtcbiAgfVxuXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2luZGV4Lmh0bWxcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZ2V0RGF0YShcIkFsbFwiLCBcIlwiKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0R29vZHM7XG4iLCJpbXBvcnQgY2FydCBmcm9tIFwiLi9tb2R1bGVzL2NhcnRcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hcIjtcbmltcG9ydCBnZXRHb29kcyBmcm9tIFwiLi9tb2R1bGVzL2dldEdvb2RzXCI7XG5cbmNhcnQoKTtcbnNlYXJjaCgpO1xuZ2V0R29vZHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///220\n')}},__webpack_exports__={};__webpack_modules__[220]()})();