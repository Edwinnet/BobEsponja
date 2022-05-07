document.querySelector("body").addEventListener("mousemove",eyeball);
function eyeball(){
    var eye = document.querySelectorAll(".ojoexterno");
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientHeight / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x,event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rot+"deg)";
    })
}