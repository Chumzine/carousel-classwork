const leftButton = document.querySelector("button.left");
const rightButton = document.querySelector("button.right");

const main = document.querySelector("main");

const slideshowContainer = document.getElementById('slideshow-container');


function updateSlideshow() {
    slideshowContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
    // currentIndex += 1;
}

function changeto() {
    main.style.backgroundImage = `url(${images[currentIndex]})`;
}

leftButton.addEventListener("click", function() {
    previousImage();
    changeto();
  });
  
  rightButton.addEventListener("click", function() {
    nextImage();
    changeto();
  });
  
 // Set up a timer to update the slideshow at regular intervals
  setInterval(function() {
    updateSlideshow();
    changeto();
  }, 3000);








// main.style.backgroundImage = `url(${images[0]})`;

// function changeto() {
//     main.style.backgroundImage = `url(${images[currentIndex]})`;
// }

// leftButton.addEventListener("click", function() {
//     previousImage();
//     changeto();
//   });
  
//   rightButton.addEventListener("click", function() {
//     nextImage();
//     changeto();
//   });
  
//  // Set up a timer to update the slideshow at regular intervals
//   setInterval(function() {
//     updateSlideshow();
//     nextImage();
//     changeto();
//   }, 3000);


  






















// function fadeInOut() {
//     main.style.opacity = 0;

//     setTimeout(function () {
//         main.style.backgroundImage = `url(${images[currentSlideIndex]})`;
//         main.style.opacity =1;
//     }, 1000)
// }

// function changeto() {
//     fadeInOut();
// }
// leftButton.addEventListener("click", function() {
//     previousImage();
//     changeto();
// });
      
// rightButton.addEventListener("click", function() {
//     nextImage();
//     changeto();
// }); 
// setInterval(function() {
//         nextImage();
//         changeto();
// }, 1300);
    
    