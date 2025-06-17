let tl = gsap.timeline();
let time = gsap.timeline();

tl.from("#nav h1, #nav ul li,#nav h2 ", {
  y: -100,
  delay: 1,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

time.from("#left h1", {
  x: -100,
  delay: 1,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});
time.from("#right img", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.1
});

gsap.from(".page2 .box", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: ".page2 .box"
});


const phrases = [
    "Full-Stack Software Engineer",
    "Passionate Problem-Solver",
    "Focused on Simplicity & Usability"
];

const typingSpeed = 50; // ms per character when typing
const deletingSpeed = 25; // ms per character when deleting
const delayBetweenLoops = 1500; // pause after typing a full phrase

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const element = document.getElementById("typing-text");

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        element.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        element.textContent = currentPhrase.substring(0, charIndex++);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
        delay = delayBetweenLoops;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // move to next phrase
    }

    setTimeout(typeEffect, delay);
}

typeEffect();
