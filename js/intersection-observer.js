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


/* // PICTURE FADE IN
const picture = document.querySelector(".content-picture");
const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "-50px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.map(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("picture-change");
        } else {
            entry.target.classList.remove("picture-change");
        }
    });
}, options);
    observer.observe(picture);
//IF picture IS AN ARRAY, USE
pictures.forEach(picture => {
    observer.observe(picture);
})
*/