    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeIn');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.service-card, .gallery img').forEach(card => {
            observer.observe(card);
        });
        
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                this.reset();
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('mobile-menu');
const nav = document.getElementById('main-nav');

// Abrir/cerrar menú
menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Bloquear scroll cuando el menú está abierto
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target) &&
        nav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});
});
    