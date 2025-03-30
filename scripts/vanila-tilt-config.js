let vanillaTilt;

const vanillaTiltWork = () => {
    document.querySelectorAll('.skillsBox').forEach(element => {
        if (window.innerWidth >= 1030)
            vanillaTilt = new VanillaTilt(element, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1
            });             
        else {
            vanillaTilt = null;
        }      
    });
}

window.addEventListener('load', () => {
    vanillaTiltWork()
});

window.addEventListener('resize', () => {
    vanillaTiltWork();
});