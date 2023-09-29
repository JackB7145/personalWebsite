// initializing the variables and constants
const scriptURL = 'https://script.google.com/macros/s/AKfycbzHHIUnWm-ykpqxCEvwrxQuE-JSFqftRX7QJxdSN-by2eUOyV1_gSfjkTWUOZKaZnVVmA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
var sizemenu =  document.getElementById("sidemenu")
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Listening for the submit button on the google form
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://script.google.com/macros/s/AKfycbzHHIUnWm-ykpqxCEvwrxQuE-JSFqftRX7QJxdSN-by2eUOyV1_gSfjkTWUOZKaZnVVmA/exec', { method: 'POST', body: new FormData(form)})
    .then(response => {
        form.reset()
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 3000)
    })
    .catch(error => console.error('Error!', error.message))
})

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

