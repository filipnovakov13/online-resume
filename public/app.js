document.addEventListener("DOMContentLoaded", () => {   

    const hiddenElements = document.querySelectorAll('.document .hidden');
    
    const observer = new IntersectionObserver((entries) => {    
        entries.forEach((entry, index) => {    
            if (entry.isIntersecting) { 
                setTimeout(() => {    
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }, index * 50);
            }  
        });
    });
    
    
    hiddenElements.forEach((el) => observer.observe(el));
});    