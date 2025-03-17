window.addEventListener('resize', () => {
    if (window.innerWidth <= 1030) {
        console.log("Ширина экрана <= 1030px")
    }
    else{
        console.log("Ширина экрана > 1030px")
    }
})


VanillaTilt.init(document.querySelectorAll(".skillsBox"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});