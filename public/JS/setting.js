/* --------------- Toggle style switcher --------------- */

const styleSwitcher = document.getElementById("style-switcher");
const styleToggler = document.getElementById("style-toggler");

styleToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// document.addEventListener("click", (e) => {
//     if (e.target.id !== "style-switcher" && e.target.id !== "style-toggler") {
//         styleSwitcher.classList.remove('open');
//         styleToggler.classList.remove('open');
//     }
// });

// hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* --------------- Theme Colors --------------- */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* --------------- Light and Dark Theme Mode --------------- */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

