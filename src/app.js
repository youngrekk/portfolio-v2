window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                alert("Mensaje enviado");
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function myFunction() {
    var x = document.getElementById("myLinks");
    var burger = document.getElementById("burger");

    if (x.style.display === "flex") {
      x.style.display = "none";
      burger.style.backgroundColor = "rgb(24, 24, 24)"
    } else {
      x.style.display = "flex";
      burger.style.backgroundColor = "white"
    }
}

