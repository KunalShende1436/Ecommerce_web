document.addEventListener('DOMContentLoaded', () => {
    // --- Global Variables ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const toast = document.getElementById('toast');
    
    // Simple state management (cart count is no longer displayed, but we keep the logic to simulate adding an item)
    let cartItemCount = 0; 
    
    // --- Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- Toast Notification Logic ---
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --- Add to Cart Handler ---
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get product name from the card (adjust selector if HTML changes)
            const productCard = e.target.closest('.product-card');
            const productName = productCard ? productCard.querySelector('.product-name').textContent : 'Item';
            
            // 1. Update Cart Count (Internal for simulation)
            cartItemCount++;

            // 2. Show Notification
            showToast(`${productName} added to cart! 🛒`);
            
            // *In a real app, you would also:
            // * - Send an AJAX request to the server or
            // * - Update a complex local storage cart object
        });
    });

    // --- Simple Form Submission Handling (for contact.html) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, here you would submit data via fetch/AJAX
            showToast('Message sent successfully! We will be in touch soon.');
            contactForm.reset();
        });
    }
});