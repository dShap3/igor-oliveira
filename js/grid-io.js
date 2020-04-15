const figures = document.querySelectorAll("figure");
const options = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("fade-in");
        }
    });
}, options);

figures.forEach((figure) => {
    observer.observe(figure);
});