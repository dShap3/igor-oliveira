const toggleButton = document.querySelector(".hamburger");
toggleButton.onclick = () => {
    const lineTop = document.querySelector(".line-top");
    const lineMiddle = document.querySelector(".line-middle");
    const lineBottom = document.querySelector(".line-bottom");
    const navBar = document.querySelector("nav");

    lineTop.classList.toggle("rotateUp");
    lineMiddle.classList.toggle("disappear");
    lineBottom.classList.toggle("rotateDown");
    navBar.classList.toggle("appears");
}

window.onload = () => {
    const loadingSpinner = document.querySelector(".loading");
    setTimeout(() => {
        loadingSpinner.classList.add("loading-show");
        loadingSpinner.style.display = "none";
    }, 1000);

    const h1 = document.querySelector(".mid-header h1");
    const h2 = document.querySelector(".mid-header h2");
    toggleButton
    setTimeout(() => {
        h1.classList.add("show-heading-1");
        h2.classList.add("show-heading-2");
    }, 1250);
}

/* const spanLink = document.querySelector("header .click a");
function scrollDown(){
    const aboutMe = document.getElementById("about-me");
    aboutMe.scrollIntoView({behavior: "smooth"});
}
spanLink.addEventListener("click", scrollDown); */

$('.click .point-down').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200);
    }
});
