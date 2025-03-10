let randomChars = "abcdefghijklmnopqrstuvwxyz" + "1234567890" + "!@#$%^&*()_+-<>?";
        
window.addEventListener('load', () => {
    textEffectLogo();
    textEffectHeading();
})

setInterval(() => {
    textEffectLogo();
    textEffectHeading();
}, 1000 * 15);

let textEffectLogo = () => {
    let logoWord = document.querySelector("header .logo");
    let originalText = logoWord.dataset.text;
    let iterations = 0;
    let interval = setInterval(() => {
        logoWord.textContent = originalText.split("").map((char, index) => {
            if (index < iterations) return char;
                return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }).join("");
        if (iterations >= originalText.length) {
            clearInterval(interval);
        }
        iterations += 1 / 3;
    },50)
}
let textEffectHeading = () => {
    document.querySelectorAll('.heading h2').forEach(element => {
        let originalTextHeading = element.dataset.text;
        let iterations = 0;
        let interval = setInterval(() => {
            element.textContent = originalTextHeading.split("").map((char, index) => {
                if (index < iterations) return char;
                    return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }).join("");
            if (iterations >= originalTextHeading.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3;
        },50)
    })
}