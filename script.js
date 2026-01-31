document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('landing-form');
    const feedback = document.getElementById('form-feedback');

    // 1. Change Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
    });

    // 2. Handle Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Simulate network delay
        setTimeout(() => {
            submitBtn.innerText = 'Message Sent!';
            submitBtn.style.background = '#10b981'; // Success Green
            
            feedback.innerHTML = '<p style="color: #10b981; margin-top: 1rem;">Success! We will contact you shortly.</p>';
            
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerText = 'Send Message';
                submitBtn.disabled = false;
                submitBtn.style.background = '#2563eb';
                feedback.innerHTML = '';
            }, 3000);
        }, 1500);
    });
});