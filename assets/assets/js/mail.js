(function() {
    emailjs.init("zotUh0vDhpooTKoBU");
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    // Initialize the Bootstrap Modal object
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm('service_y4xoapf', 'template_s1rt6yp', this)
                .then(() => {
                    // 1. Reset the button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // 2. Clear the form
                    contactForm.reset();
                    
                    // 3. Show the Thank You Modal
                    thankYouModal.show();
                    
                }, (error) => {
                    submitBtn.innerHTML = 'Error. Try Again';
                    submitBtn.style.background = '#dc3545';
                    console.error('EmailJS Error:', error);
                    submitBtn.disabled = false;
                });
        });
    }
};