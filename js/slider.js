const slider = document.querySelector('.slider');

let isMouseDown = false;
let firstClick;
let dragDirection;

slider.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    slider.classList.add("isOn");
    firstClick = e.pageX - slider.offsetLeft;
    dragDirection = slider.dragDirection;
});

slider.addEventListener("mousemove", (e) => {
    if(!isMouseDown) return;
    e.preventDefault();
    const xAxis = e.pageX - slider.offsetLeft;
    const dragger = (xAxis - firstClick) * 2;
    slider.dragDirection = dragDirection - dragger;
});

slider.addEventListener("mouseup", () => {
    isMouseDown = false;
    slider.classList.remove("isOn");
});

slider.addEventListener("mouseleave", () => {
    isMouseDown = false;
    slider.classList.remove("isOn");
});