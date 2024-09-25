
const random = document.querySelector('#random');
const preloader = document.querySelector('#preloader');
let logos = document.querySelectorAll('.logo');

const colors = [
'#DAD6EA',
'#CDDFE6',
'#D3E0D3',
'#EAE0D6'
];

function generateRandomNumber(item) {
    let lastNumber = null;
    let counter = 0;
    const maxIterations = 10;
    const generatedNumbers = new Set();
    const intervalId = setInterval(() => {
        if (counter >= maxIterations) {
            clearInterval(intervalId);
            preloader.classList.remove('bg-dark')
            let newColorNumber;
            preloader.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length))];
            logos.forEach(logo => logo.style.filter = 'invert(100)');
            return;
        }
        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * (logos.length));
        } while (generatedNumbers.has(newNumber));
        generatedNumbers.add(newNumber);

        lastNumber = newNumber;
        logos.forEach(logo => logo.style.display = 'none');
        logos[newNumber].style.display = 'block';
        counter++;
    }, 180);
}
setTimeout(() => {
    generateRandomNumber(random);
}, 500)

