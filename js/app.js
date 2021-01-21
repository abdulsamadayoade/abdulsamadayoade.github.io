// NAV HAMBURGR MENU
const navIcon = document.querySelector('.nav--icon');
const navSecond = document.querySelector('.nav--second');

navIcon.addEventListener('click', function () {

    if (this.classList.contains('nav--anim')) {
        this.classList.remove('nav--anim');
        navSecond.classList.remove('showIn');
    } else {
        this.classList.add('nav--anim');
        navSecond.classList.add('showIn');
    }
});

// CLOSE THE NAV WHEN THE NAV LINKS ARE GETTING CLICKED
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navSecond.classList.remove('showIn');
        navIcon.classList.remove('nav--anim');
    })
});

// CLOSE THE NAV WHEN THE SIDE NAV LOGO IS CLICKED
const logoWhite = document.querySelector('.logo--white');

logoWhite.addEventListener('click', function () {
    navSecond.classList.remove('showIn');
    navIcon.classList.remove('nav--anim');
})