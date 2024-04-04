/*=============== toggle icon navbar=============== */ 
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    }

/*=============== light theme =============== */
    var moon = document.getElementById("dark");

    moon.onclick = function(){
        document.body.classList.toggle("dark-theme");
    }

/*=============== scroll section active link =============== */
    let sections= document.querySelectorAll('section');
    let navLinks= document.querySelectorAll('header nav a');

    window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });       
        };
    });

/*=============== sticky navbar =============== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    
        
/*=============== remove toggle icon and navbar onclick navbar links (scroll) =============== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    };

/*=============== scroll reveal =============== */
    ScrollReveal ({
        //reset: false, 
        distance: '80px',
        duration: 2600,
        delay: 450,
        
    });

    ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });

/*=============== typed js =============== */
    const typed = new Typed('.multiple-text', {
        strings: ['Full-Stack Developer', 'UX/UI Specialist', 'E-commerce Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
    });

/*=============== send contact info to email =============== */
    const form = document.querySelector('form');
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    function sendEmail(){
        const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> 
        Number: ${number.value}<br>  Message: ${message.value}<br>` 

        Email.send({
            SecureToken: "93dc7028-ced8-4345-88bb-64271c09a6e4",
            To : 'marc.a.thomas25@gmail.com',
            From : "marc.a.thomas25@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Your Message has been sent!",
                    icon: "success"
                  });
            }
          }
        );
    }

/*=============== check all form inputs =============== */
    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value == ""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            
            if (items[1].value !="") {
                checkEmail();
            }

            items[1].addEventListener("keyup", () => {
                checkEmail();
            });
        
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }   

        }); 
            
        }

    }

/*=============== verify  text on each text field =============== */
    function checkEmail() {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errorTxtEmail = document.querySelector(".error-txt.email")
        
        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if (email.value != "") {
                errorTxtEmail.innerText = "Enter a valid email address";
            }
            else {
                errorTxtEmail.innerText = "Email can't be blank";   
            }

        }
        else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
        !subject.classList.contains("error") && !number.classList.contains("error") && 
        !message.classList.contains("error") ) {
            sendEmail();

            form.reset();
            return false;
        }
    });

/*=============== verify cookies =============== */
function acceptCookies() {
    // Set a cookie named 'acceptedCookies' with value 'true' that expires in 7 days
    document.cookie = "acceptedCookies=true; expires=" + new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";
    // Hide the cookie consent
    document.getElementById('cookieConsent').style.display = 'none';
}

function closeCookieConsent() {
    // Hide the cookie consent
    document.getElementById('cookieConsent').style.display = 'none';
}

// Check if the user has already accepted cookies
window.onload = function() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('acceptedCookies='))) {
        // If 'acceptedCookies' cookie is found, hide the cookie consent
        document.getElementById('cookieConsent').style.display = 'none';
    }
} 