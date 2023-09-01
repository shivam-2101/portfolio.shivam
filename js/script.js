// Menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });


// Sticky navbar
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


// remove menu icon navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// Dark light mode
document.addEventListener('DOMContentLoaded', () => {
    let darkModeIcon = document.querySelector('#darkMode-icon');

    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    };
});

// Scroll reveal

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Contact form data submission on google sheet named- Contact Form Data 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzhW3Vwrxy1XgwkZPHV8LhqGQY_Q4L6105bhfFpnqCdKqFdH4q2GlW7LoQHUFsCsMI1/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// form validations 

function validateFullName(input) {
    // Remove non-alphabetic characters and limit length
    input.value = input.value.replace(/[^A-Za-z ]/g, '').slice(0, 30);
    
    // To capitalize first letter
    input.value = input.value.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
}

function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailPattern.test(input.value)) {
        input.classList.add("invalid-input");
    } else {
        input.classList.remove("invalid-input");
    }
}

function validateMobile(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
}