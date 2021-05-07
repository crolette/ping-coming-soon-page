
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById("mail");
const error = document.getElementById("error-mail");


form.addEventListener("submit", function(e) {
    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.validity.valueMissing || !email.value.match(mailformat)) {
        email.classList.add("error");
        error.classList.add("active");
        email.animate([
            {transform: 'translateX(-2px)'},
            {transform: 'translateX(2px)'},
            {transform: 'translateX(-2px)'},
            {transform: 'translateX(2px)'}
        ], 200);
        e.preventDefault();
    }
}, false)

