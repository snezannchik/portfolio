'use strict'
const links = document.querySelectorAll('.navigation a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible'); 
    }
});

scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
