const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");


burger.addEventListener('click', () => { navlinks.classList.toggle('mobile-menu') })


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})