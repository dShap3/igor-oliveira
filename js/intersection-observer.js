const sliders = document.querySelectorAll('.slide-in');

const options = {
    root: null,
    threshold: 0.4,
    rootMargin: "0px 0px -100px 0px" 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, options);
sliders.forEach(slider => {
    observer.observe(slider);
});