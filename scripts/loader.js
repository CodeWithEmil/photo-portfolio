const loader = document.querySelector(".js-loader");

window.addEventListener("load", () => {
   loader.classList.add("loader-hidden");
   loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
   })
})