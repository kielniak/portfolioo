const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
navToggle.setAttribute('aria-label', 'menu');

const header = document.querySelector('header');
const nav = document.querySelector('nav');

if (header && nav) {
    header.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}