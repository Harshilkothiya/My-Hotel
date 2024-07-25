const icon = document.querySelector('.panel');
let clickCount = 0;

function hamburger() {
    clickCount++;
    if (clickCount % 2 === 0) {
        icon.style.right = "-1000px";
        document.body.classList.remove('noscroll');
    } else {
        icon.style.right = "0px";
        document.body.classList.add('noscroll');
    }
}
