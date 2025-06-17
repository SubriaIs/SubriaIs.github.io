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
        charIndex--;
        element.textContent = currentPhrase.substring(0, charIndex);
      } else {
        element.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
      }

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentPhrase.length + 1) {
        delay = delayBetweenLoops;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(typeEffect, delay);
    }

    typeEffect();



 /*  // Select all nav links
  const navLinks = document.querySelectorAll('#nav1 ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      // Add 'active' to clicked link
      this.classList.add('active');
    });
  }); */


   document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#nav1 ul li a');
    const sections = [];

    // Collect all section elements based on href targets
    navLinks.forEach(link => {
      const sectionId = link.getAttribute('href').slice(1);
      const section = document.getElementById(sectionId);
      if (section) sections.push({ link, section });
    });

    // Click event: highlight the clicked link
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Scroll event: update active link
    window.addEventListener('scroll', function () {
      let current = null;

      sections.forEach(({ link, section }) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = link;
        }
      });

      if (current) {
        navLinks.forEach(link => link.classList.remove('active'));
        current.classList.add('active');
      }
    });
  });
