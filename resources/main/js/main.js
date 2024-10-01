import {gsap} from "gsap";
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const preloader = document.querySelector('#preloader');
const logos = document.querySelectorAll('.logo');
const body = document.querySelector('body')
body.style.overflow = 'hidden'

const colors = [
    '#DAD6EA',
    '#CDDFE6',
    '#D3E0D3',
    '#EAE0D6',
    '#F1F1F1'
];

function generateRandomSvg() {
    const maxIterations = 10;
    const generatedNumbers = new Set();
    let counter = 0;
    let lastColor = '';

    const intervalId = setInterval(() => {
        if (counter >= maxIterations) {
            clearInterval(intervalId);
            preloader.classList.remove('bg-dark');
            lastColor = colors[Math.floor(Math.random() * colors.length)];
            preloader.style.backgroundColor = lastColor;
            logos.forEach(logo => logo.style.filter = 'invert(100)');
            setTimeout(() => { body.style.overflow = 'auto'; }, 600);
            return lastColor;
        }

        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * logos.length);
        } while (generatedNumbers.has(newNumber));
        generatedNumbers.add(newNumber);

        logos.forEach(logo => logo.style.display = 'none');
        logos[newNumber].style.display = 'block';
        counter++;
    }, 180);

    return lastColor;
}

setTimeout(() => {
    generateRandomSvg();
}, 500)

const templates = document.querySelectorAll('.template');
let i = 0;
templates.forEach(template => {
    ScrollTrigger.create({
        trigger: template,
        markers: false,
        start: "top 80%",
        end: "bottom 0%",
        scrub: true,
        onEnter: () => {
            gsap.to(preloader, {duration: 0.1, ease: 'power1.inOut', backgroundColor: colors[i]})
            if (i === colors.length - 1) {
                i = 0
            } else {
                i++;
            }
        },
        onLeaveBack: () => {
            gsap.to(preloader, {duration: 0.1, ease: 'power1.inOut', backgroundColor: colors[i]})
            if (i === 0) {
                i = colors.length - 1
            } else {
                i--;
            }
        },
    })
})

const reveals = document.querySelectorAll('.reveal');

reveals.forEach(reveal => {
    gsap.fromTo(reveal, {
        yPercent:100
    }, {
        yPercent:0,
        delay: 3.5,
        duration: 1.6,
        ease: 'power2.inOut'
    })
})

const revealDown = document.querySelector('.reveal-down')

gsap.fromTo(revealDown, {
    yPercent:-100,
}, {
    yPercent:0,
    delay: 3.5,
    duration: 1.6,
    ease: 'power2.inOut'
})


function pinItemToLastSection(item) {
    const lastSection = document.querySelector('#last-section')
    gsap.to(item, {
        y: '-100vh',
        duration: 3,
        ease: 'power1.inOut',
        scrollTrigger: {
            start: 'top top',
            end: 'bottom top',
            trigger: lastSection,
            markers: false,
            scrub: true
        }
    })
}

pinItemToLastSection(preloader)
pinItemToLastSection('#scroll-down')
pinItemToLastSection('header')
