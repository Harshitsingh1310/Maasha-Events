/* ------------------------- header ------------------------- */
const navbarToggler = document.getElementById('navbar-toggler');
const navMenu = document.getElementById('navMenu');
const bars = document.querySelector('.bar');

document.addEventListener("click", (e) => {
    if (e.target.id !== "navMenu" && e.target.id !== "navbar-toggler") {
        navMenu.classList.remove('active');
        navbarToggler.classList.remove('close');
    }
});

navbarToggler.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navbarToggler.classList.toggle('close');
});

window.addEventListener("scroll", () => {
    // fixed header 
    const header = document.querySelector(".header");
    header.classList.toggle('fixed', window.scrollY > 0);

    // nav menu on scroll
    const navList = document.querySelectorAll(".nav-list");
    const sections = document.querySelectorAll('section');
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }

        navList.forEach(el => {
            el.classList.remove('active');
            if (el.classList.contains(current)) {
                el.classList.add('active');
            }
        });
    });

    // Scroll bottom to top
    const scrollTop = document.querySelector(".scroll-top");
    scrollTop.classList.toggle('active', window.scrollY > 200);
});

// Creating a scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Preloader 
window.onload = () => {
    setTimeout(() => {
        let loader = document.getElementsByClassName("loader-wrapper")[0];
        loader.style.display = "none";
    }, 5000);
}
/* ------------x------------ header ------------x------------ */

AOS.init();

