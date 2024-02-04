// © 2023 Kimball Kaiser. All images and work on this site unless noted are the property of Kimball Kaiser. Website design is also the propert of Kimball Kaiser and probably not that great to copy anyway. :)


// function reveal() {
//     var reveals = document.querySelectorAll("[class^='content']");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);

// function reveal() {
//   var reveals = document.querySelectorAll("[class^='content']");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     // Check if the element is the first one
//     var isFirstElement = i === 0;

//     if (isFirstElement) {
//       // Calculate opacity based on the scroll position
//       var opacity = 1 - Math.max(0, Math.min(1, elementTop / (windowHeight - elementVisible)));

//       // Set the opacity of the element for the first element
//       reveals[i].style.opacity = opacity;
//     } else if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// // Trigger reveal function on page load to handle initial state
// window.addEventListener("load", reveal);

function reveal() {
  var reveals = document.querySelectorAll("[class^='content']");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    // Check if the element is the first one
    var isFirstElement = i === 0;

    if (isFirstElement) {
      // Calculate opacity based on the scroll position
      var opacity = Math.max(0.15, Math.min(1, 1 - elementTop / (windowHeight - elementVisible)));

      // Set the opacity of the element for the first element
      reveals[i].style.opacity = opacity;

      // Add or remove the "active" class based on the opacity value
      if (opacity > 0) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    } else if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Trigger reveal function on page load to handle the initial state
window.addEventListener("load", reveal);