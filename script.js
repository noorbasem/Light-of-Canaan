// Initialize Swiper for the historical landmarks slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,  // Number of slides to show
    spaceBetween: 30,  // Space between slides
    centeredSlides: true, 
    loop: true,  
    navigation: {   // Navigation buttons
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true  // Make pagination clickable
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});

// Event listeners for heritage slider navigation buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);  // Move first item to the end
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);  // Move last item to the start
});
document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', () => {
        const targetId = point.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Event listener for map points to scroll to corresponding elements
document.addEventListener('DOMContentLoaded', () => {
     // Loop through all map points and add a click event listener
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', () => {
            const targetId = point.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
     // Check if the target element exists
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else {
                console.warn("No element found with ID:", targetId);
            }
        });
    });
});