let html = "";

function display() {
   document.querySelector(".js-main").innerHTML = html;
}

function loadImages() {
   images.forEach((image) => {
      html += `<img loading="lazy" src="images/${image.src}" alt="${image.name}" class="img-${image.gridkey}">`;
   });
}

loadImages();
display();

document.querySelector(".js-show-all").addEventListener("click", () => {
   html = "";
   loadImages();
   display();
});

// Filtering images through tags inside the <nav> element
const tagbar = document.querySelectorAll(".js-tagbar-li");
tagbar.forEach((li) => {
   li.addEventListener("click", () => {
      html = "";

      images.forEach((image) => {
         if (image.tags === li.innerHTML.toLowerCase()) {
            html += `<img loading="lazy" src="images/${image.src}" alt="${image.name}" class="img-${image.gridkey}">`;
         }
      });

      display();
   })
});