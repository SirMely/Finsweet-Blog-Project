// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    body.classList.toggle('menu-active');
});


// Space


// Infi loop of Featured in.
const logos = document.querySelector('.featured-logos');
const cloneLogos = () => {
    const firstLogoSet = logos.cloneNode(true);
    logos.parentElement.appendChild(firstLogoSet);
};
cloneLogos();
