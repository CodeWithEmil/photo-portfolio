let html = "";

images.forEach((image) => {
   html += `<img loading="lazy" src="images/${image.src}" alt="${image.name}" class="img-${image.gridkey}">`;
})

document.querySelector(".js-main").innerHTML = html;