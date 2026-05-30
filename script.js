/* ==========================
   MOBILE MENU TOGGLE
========================== */

const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


/* ==========================
   CLOSE MENU WHEN CLICK LINK
========================== */

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


/* ==========================
   ACTIVE NAV LINK ON SCROLL
========================== */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

});


/* ==========================
   TYPING ANIMATION
========================== */

const typingText = document.querySelector('.typing-text');

const professions = [
    'Java Full Stack Developer',
    'MERN Stack Developer',
    'Software Engineer',
    'Ex- UPSC CSE Aspirant',
    'Problem Solver',
    'Tech Enthusiast'
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentProfession = professions[professionIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentProfession.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentProfession.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentProfession.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            professionIndex++;

            if (professionIndex === professions.length) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


/* ==========================
   SCROLL PROGRESS BAR
========================== */

window.addEventListener('scroll', () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent =
        (scrollTop / scrollHeight) * 100;

    document.getElementById('progress-bar')
        .style.width = scrollPercent + '%';
});


/* ==========================
   FADE-IN ANIMATION ON SCROLL
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    '.home-content, .home-img, .about-content, .about-img, .skill-box, .timeline-box, .project-card, .contact form'
).forEach(el => {
    observer.observe(el);
});