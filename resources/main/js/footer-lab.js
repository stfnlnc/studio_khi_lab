import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
});

gsap.set('.title', {top: '50%', left: '50%', xPercent: -50, yPercent: -50})
gsap.set('.btn-container', {top: '50%', left: '50%', xPercent: -50, yPercent: -50, zIndex: 0})
gsap.to('.btn-container', {
    y: -250,
    duration: 1.2,
    scrollTrigger: {
        start: '50% 50%',
        end: '300% 50%',
        trigger: '.title',
        scrub: 1,
        markers: false
    }
})

gsap.to('.title', {
    y: -200,
    duration: 1.2,
    scrollTrigger: {
        start: '50% 50%',
        end: '300% 50%',
        trigger: '.title',
        scrub: 2,
        markers: false
    }
})

gsap.to('.container', {
    duration: 1,
    scrollTrigger: {
        start: '50% 50%',
        end: '150% 50%',
        trigger: '.container',
        markers: false,
        pin: true,
    }
})

gsap.to('.cloud-2', {
    y: -150,
    duration: 1.2,
    scrollTrigger: {
        start: 'top 50%',
        end: '50% 50%',
        trigger: '.cloud-1',
        scrub: 2,
        markers: false
    }
})

gsap.to('.cloud-3', {
    y: -300,
    duration: 1.2,
    scrollTrigger: {
        start: 'top 50%',
        end: '50% 50%',
        trigger: '.cloud-1',
        scrub: 2,
        markers: false
    }
})

gsap.to('body', {
    backgroundColor: "#0F0E0E",
    duration: 0.8,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse',
        trigger: '.cloud-3',
        markers: false,
    }
})
gsap.to('.btn-top', {
    backgroundColor: "#0F0E0E",
    borderColor: "#0F0E0E",
    color: "#0F0E0E",
    duration: 0.8,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse',
        trigger: '.cloud-3',
        markers: false,
    }
})

const navBtn = document.querySelector('.nav-btn')
const navItems = document.querySelectorAll('.nav-item')

console.log(navItems[1].getBoundingClientRect().left)

gsap.set(navBtn, {
    top: navItems[0].getBoundingClientRect().top,
    left: navItems[0].getBoundingClientRect().left,
    width: navItems[0].getBoundingClientRect().width,
    height: navItems[0].getBoundingClientRect().height,
})

navItems.forEach((item, key) => {
    item.addEventListener('click', () => {
        gsap.to(navBtn, {
            top: navItems[key].getBoundingClientRect().top,
            left: navItems[key].getBoundingClientRect().left,
            width: navItems[key].getBoundingClientRect().width,
            height: navItems[key].getBoundingClientRect().height,
            duration: 0.6,
            ease: "power4.inOut"
        })
    })
})
