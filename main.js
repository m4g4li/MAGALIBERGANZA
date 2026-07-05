let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let navLinks = document.querySelectorAll('.navbar a');

// Abrir y cerrar el menú
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
}

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    });
});

document.addEventListener('click', (e) => {
    if (
        !navbar.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        navbar.classList.contains('active')
    ) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
});