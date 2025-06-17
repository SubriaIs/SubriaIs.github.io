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


const fullText = "Full-Stack Software Engineer | Passionate Problem-Solver | Focused on Simplicity & Usability";
    const typingSpeed = 50; // milliseconds per character
    const deletingSpeed = 25; // milliseconds per character
    const delayBetweenLoops = 1500; // pause before deleting/typing again

    let i = 0;
    let isDeleting = false;
    const element = document.getElementById("typing-text");

    function typeEffect() {
        if (isDeleting) {
            element.textContent = fullText.substring(0, i--);
        } else {
            element.textContent = fullText.substring(0, i++);
        }

        if (!isDeleting && i === fullText.length) {
            setTimeout(() => isDeleting = true, delayBetweenLoops);
        } else if (isDeleting && i === 0) {
            isDeleting = false;
        }

        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect();

