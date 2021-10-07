function myFunction() {

    if ( document.getElementById("icon").classList.contains("fa-bars") ){
            document.getElementById("icon").classList.remove('fa-bars',);
            document.getElementById("icon").classList.add("fa-times");
        
        document.getElementById("menu").style.display = "block"
        document.getElementById("menu").style.opacity = "1";
        
        return
    }
    
    if ( document.getElementById("icon").classList.contains("fa-times") ){
            document.getElementById("icon").classList.remove('fa-times');
            document.getElementById("icon").classList.add("fa-bars");
            document.getElementById("menu").style.display = "none"
            document.getElementById("menu").style.opacity = "0";
        return
    }
    
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





// Tell the observer which elements to track


const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('h3animation');
    }
  });
});

observer.observe(document.querySelector('.h3noanimation'));


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

