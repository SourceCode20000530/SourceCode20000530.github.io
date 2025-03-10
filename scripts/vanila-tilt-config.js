headerElement = document.querySelector('header');

if (!headerElement.classList.contains('sticky')) {
    VanillaTilt.init(document.querySelectorAll(".skillsBox"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    });
}
else {
    VanillaTilt.init(document.querySelectorAll(""), {
    });
}