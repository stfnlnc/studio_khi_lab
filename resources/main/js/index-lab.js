import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

window.onresize = function(){location.reload();}

window.onload = function() {

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.103,    // spacing of the cards (stagger)
    snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
    cards = gsap.utils.toArray('.cards li'),
    seamlessLoop = buildSeamlessLoop(cards, spacing),
    scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
        totalTime: 0,
        duration: 0.8,
        ease: "power3",
        paused: true
    }),
    trigger = ScrollTrigger.create({
        start: 0,
        onUpdate(self) {
            if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
                wrapForward(self);
            } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
                wrapBackward(self);
            } else {
                scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
                scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
                self.wrapping = false;
            }
        },
        end: "+=3000",
        pin: ".gallery",
    });

function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
    iteration++;
    trigger.wrapping = true;
    trigger.scroll(trigger.start + 1);
}

function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
    iteration--;
    if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
        iteration = 9;
        seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
        scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above.
    }
    trigger.wrapping = true;
    trigger.scroll(trigger.end - 1);
}

function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
    let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
    if (progress > 1) {
        wrapForward(trigger);
    } else if (progress < 0) {
        wrapBackward(trigger);
    } else {
        trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
    }
}


function buildSeamlessLoop(items, spacing) {
    let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
        startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
        loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime
        rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
        seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
            paused: true,
            repeat: -1, // to accommodate infinite scrolling/looping
            onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            }
        }),
        l = items.length + overlap * 2,
        time = 0,
        i, index, item;

    // set initial state of items
    gsap.set(items, {xPercent: 495, opacity: 0});

    // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
    for (i = 0; i < l; i++) {
        index = i % items.length;
        item = items[index];
        time = i * spacing;
        rawSequence.fromTo(item, {opacity: 1}, {opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.inOut", immediateRender: false}, time)
            .fromTo(item, {xPercent: 495}, {xPercent: -495, duration: 1, ease: "none", immediateRender: false}, time);
        i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
    }

    // here's where we set up the scrubbing of the playhead to make it appear seamless.
    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none"
    }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        immediateRender: false,
        ease: "none"
    });
    return seamlessLoop;
}


const items = document.querySelectorAll('.card > div')
const itemsCard = document.querySelectorAll('.card')

let options = {
    root: document.querySelector(".cards"),
    rootMargin: "0px",
    threshold: 0.1,
};
let callback = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            let heightLg = "33.6875vw"
            if(window.innerWidth < 1440) {
                heightLg = "65.6875vh"
            }
                gsap.to(entry.target, {
                    height: heightLg,
                    duration: 0.5
                })
        } else {
                let heightSm = "22.6875vw"
                if(window.innerWidth < 1440) {
                    heightSm = "46.6875vh"
                }
                gsap.to(entry.target, {
                    height: heightSm,
                    duration: 0.5
                })
        }
    });
};
let observer = new IntersectionObserver(callback, options);
items.forEach(item => {
    observer.observe(item);
})
itemsCard.forEach((item, key) => {

    observer.observe(item);

    if(key !== 0) {
        gsap.fromTo(item, {
            opacity: 0,
            yPercent: -100,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1.6,
            delay: 1.6,
            ease: 'power4.inOut',
        })
    }
})

let tl = gsap.timeline()

new SplitText(".title", { type: "lines" });
new SplitText(".title", { type: "lines", linesClass: "overflow-hidden" });
new SplitText(".index", { type: "lines" });
new SplitText(".index", { type: "lines", linesClass: "overflow-hidden" });

gsap.set(items[0], {y: (window.innerHeight / 2) - (items[0].getBoundingClientRect().height / 2)})
gsap.set('.mask-left', {height: items[0].getBoundingClientRect().height + 10, width: (items[0].getBoundingClientRect().width)/2, top: (window.innerHeight / 2) - (items[0].getBoundingClientRect().height / 2)})
gsap.set('.mask-right', {height: items[0].getBoundingClientRect().height + 10, width: (items[0].getBoundingClientRect().width)/2, top: (window.innerHeight / 2) - (items[0].getBoundingClientRect().height / 2), left: '50%'})

tl.to('.mask-right',{
        delay: 1.2,
        scaleX: 0,
        transformOrigin: 'right',
        duration: 1,
        ease: 'power4.inOut',
    }, 0)
    .to('.mask-left',{
        delay: 1.2,
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power4.inOut',
    }, 0)
    .to(items[0], {
        y: 0,
        duration: 0.8,
        ease: 'power4.out'
    })
    .fromTo('.title', {
        yPercent: 100,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out'
    }, 2)
    .fromTo('.index', {
        yPercent: 100,
        opacity: 0
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out'
    }, 2)
    .to('.subtitle', {
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out'
    }, 3)

const cursor = document.querySelector('.cursor')
const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)
const pointers = document.querySelectorAll('.pointer')
pointers.forEach(pointer => {
    pointer.addEventListener('mouseover', () => {
        cursor.style.opacity = '0'
        cursor.style.cursor = 'pointer'
    })
    pointer.addEventListener('mouseout', () => {
        cursor.style.opacity = '1'
        cursor.style.cursor = 'none'
    })
})

}
