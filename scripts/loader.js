const loader = document.querySelector(".js-loader");

window.addEventListener("load", () => {
   loader.classList.add("loader-hidden");
   setTimeout(() => {
      loader.classList.add("loader-display-none");
   }, 500)
});