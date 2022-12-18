window.onscroll = function() {
    myFunction()
};
// var nav = document.querySelectorAll(".menu");
var logo = document.getElementById("logo");
var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.src = "asstes/images/logoone.webp";
        // nav.style.color = "#fff";
    } else {
        header.classList.remove("sticky");
        logo.src = "asstes/images/footer-logo.png";
    }
}



const arrording_function = (index) => {
    const arrow = document.querySelectorAll('.faq .hole_faq .accordion-item .accordion-title .arrow-wrapper .arrow');
    const according_answer = document.querySelectorAll('.faq .hole_faq .accordion-item .accordion-description');

    for (let i = 0; i < according_answer.length; i++) {
        according_answer[i].classList.remove('accordion-active');
    }
    according_answer[index].classList.add('accordion-active');
}
arrording_function(0);



function clickNav() {
    const primary_menu = document.getElementById('primary_menu');
    primary_background.style.display = "none";
    primary_menu.classList.remove('primary_active');
}
const showMenu = () => {
    const primary_menu = document.getElementById('primary_menu');
    const primary_background = document.getElementById('primary_background');
    primary_menu.classList.add('primary_active');
    primary_background.style.display = "block";
}
const hideMenu = () => {
    const primary_menu = document.getElementById('primary_menu');
    const primary_background = document.getElementById('primary_background');
    primary_background.style.display = "none";
    primary_menu.classList.remove('primary_active');
}


// ========= form pop ======

function showContactPopup() {
    const contactFormPopup = document.getElementById('contactFormPopup');
    contactFormPopup.classList.add('contactFormPopupActive');
}

function contactFormPopupClose() {
    const contactFormPopup = document.getElementById('contactFormPopup');
    contactFormPopup.classList.remove('contactFormPopupActive');
};

