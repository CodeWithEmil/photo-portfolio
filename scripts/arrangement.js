let firstColumn = "";
let secondColumn = "";
let thirdColumn = "";
let fourthColumn = "";

images.forEach((image) => {
   const img = `<img src="images/${image.src}" alt="${image.name}">`;
   if(image.column === 1) {
      firstColumn += img;
   } else if (image.column === 2) {
      secondColumn += img;
   } else if (image.column === 3) {
      thirdColumn += img;
   } else {
      fourthColumn += img;
   }
})

document.querySelectorAll(".js-image-container")[0].innerHTML = firstColumn;
document.querySelectorAll(".js-image-container")[1].innerHTML = secondColumn;
document.querySelectorAll(".js-image-container")[2].innerHTML = thirdColumn;
document.querySelectorAll(".js-image-container")[3].innerHTML = fourthColumn;