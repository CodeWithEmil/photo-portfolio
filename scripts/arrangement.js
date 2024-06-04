let html = "";
const showAll = document.querySelector(".js-show-all");

function display() {
   document.querySelector(".js-main").innerHTML = html;
}

function loadImages() {
   html = "";
   images.forEach((image) => {
      html += `<img loading="lazy" src="images/${image.src}" alt="${image.name}" class="img-${image.gridkey}">`;
   });
   display();
}

function clearSelectedTags() {
   showAll.classList.remove("tag-selected");
   tagbar.forEach((tag) => {
      tag.classList.remove("tag-selected");
   });
}

showAll.classList.add("tag-selected");
loadImages();

showAll.addEventListener("click", () => {
   clearSelectedTags();
   showAll.classList.add("tag-selected");
   loadImages();
});

// Filtering images through tags inside the <nav> element
const tagbar = document.querySelectorAll(".js-tagbar-li");
tagbar.forEach((li) => {
   li.addEventListener("click", () => {
      clearSelectedTags();
      li.classList.add("tag-selected");

      html = "";
      let foundImages = false;
      images.forEach((image) => {
         if (image.tags === li.innerHTML.toLowerCase()) {
            html += `<img loading="lazy" src="images/${image.src}" alt="${image.name}" class="img-${image.gridkey}">`;
            foundImages = true;
         }
      });
      
      if (!foundImages) {
         html = "No results found... yet.";
      }

      display();
   });
});