window.onload=()=>{
  toggleNavbar();
  toggleMobileNav();
  smoothScroll();
  highlightActiveSection();
}

// Setup Navbar Scroll Effect
const toggleNavbar = () => {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Highlight active section in navbar
const highlightActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || 
                (current === '' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                if (href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
    
    // Smooth scroll for footer icon
    const footerIcon = document.querySelector('.footer-iconTop a');
    if (footerIcon) {
        footerIcon.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

const toggleMobileNav = () => {
    const navToggler = document.querySelector('#nav-toggler');
    const navMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');
    // togglerClick function
    function togglerClick() {
        if(navMenu.classList.contains('opacity-0')) {
        navMenu.classList.remove('opacity-0');
        navMenu.classList.add('opacity-100');
        }else{
        navMenu.classList.remove('opacity-100');
        navMenu.classList.add('opacity-0');
        }
    }
    // navLinkClick function
    function navLinkClick() {
        if(navMenu.classList.contains('opacity-100')) {
            navToggler.click();
        }
    }
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 50 && navMenu.classList.contains('opacity-100')) {
            navMenu.classList.remove('opacity-100');
            navMenu.classList.add('opacity-0');
        }
    });

    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}