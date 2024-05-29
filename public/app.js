document.addEventListener("DOMContentLoaded", () => {   

    const hiddenElements = document.querySelectorAll('.document .hidden');
    
    const observer = new IntersectionObserver((entries) => {    
        entries.forEach((entry, index) => {    
            console.log(entry)
            if (entry.isIntersecting) { 
                setTimeout(() => {    
                entry.target.classList.add('show');
            }, index * 50);
            } else {    
                entry.target.classList.remove('show');
            }   
        });
    });
    
    
    hiddenElements.forEach((el) => observer.observe(el));
});    