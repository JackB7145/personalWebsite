// initializing the variables and constants
var sizemenu =  document.getElementById("sidemenu")
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Initializing the open tab function for the about me section
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Showing the dropdown content
function myFunction() {
    document.getElementById("dropdown-menu1").classList.toggle("show");
}
function myFunction1() {
    document.getElementById("dropdown-menu2").classList.toggle("show");
}

// Adding the side menu feature once the screen size becomes small enough
function openmenu(){
    sidemenu.style.right = "50px"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'fadeIn'
    const fadeElements = document.querySelectorAll('.fadeIn');
  
    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.4 // Trigger when 60% of the element is visible
    };
  
    // Callback function for the Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Add class to start animation
        } else {
          entry.target.classList.remove('active'); // Remove class to reset animation
        }
      });
    };
  
    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Observe each element
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  });
