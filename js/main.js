const burgerIcon = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const arrowLink = document.querySelector(".hero-text__arrow-link");

const body = document.body;

if (menu && burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
        burgerIcon.classList.toggle("active");
        body.classList.toggle("scroll-lock");
        arrowLink.classList.toggle("hero-text__arrow-link-none");
    });

    menu.querySelectorAll(".header__link").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            burgerIcon.classList.remove("active");
            body.classList.remove("scroll-lock");
            arrowLink.classList.remove("hero-text__arrow-link-none");
        });
    });
}

const anchors = document.querySelectorAll('a[href*="#"');
anchors.forEach((anchors) => {
    anchors.addEventListener("click", (event) => {
        event.preventDefault();

        const blockID = anchors.getAttribute("href").substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

arrowLink.addEventListener("click", () => {
    document.getElementById("works").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});