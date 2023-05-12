const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}
document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.addEventListener("DOMContentLoaded", hiddenCloseclick_1());
document.addEventListener("DOMContentLoaded", hiddenCloseclick_2());
document.addEventListener("DOMContentLoaded", hiddenCloseclick_3());
document.addEventListener("DOMContentLoaded", hiddenCloseclick_4());

document.getElementById('click-to-hide').addEventListener("click", hiddenCloseclick);
document.getElementById('click-to-hide_1').addEventListener("click", hiddenCloseclick_1);
document.getElementById('click-to-hide_2').addEventListener("click", hiddenCloseclick_2);
document.getElementById('click-to-hide_3').addEventListener("click", hiddenCloseclick_3);
document.getElementById('click-to-hide_4').addEventListener("click", hiddenCloseclick_4);
function hiddenCloseclick() {
    let x = document.getElementById('hidden-element');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};
function hiddenCloseclick_1(){
    let x = document.getElementById('hidden-element_1');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}
};

function hiddenCloseclick_2(){
    let x = document.getElementById('hidden-element_2');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}
};
function hiddenCloseclick_3(){
    let x = document.getElementById('hidden-element_3');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};
function hiddenCloseclick_4(){
    let x = document.getElementById('hidden-element_4');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};

document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem());
document.getElementById('clik_lorem').addEventListener("click", hiddenCloseclick_lorem);


function hiddenCloseclick_lorem(){
    let x = document.getElementById('lorem');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};

document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_1());
document.getElementById('clik_lorem_1').addEventListener("click", hiddenCloseclick_lorem_1);


function hiddenCloseclick_lorem_1(){
    let x = document.getElementById('lorem_1');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};
document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_2());
document.getElementById('clik_lorem_2').addEventListener("click", hiddenCloseclick_lorem_2);


function hiddenCloseclick_lorem_2(){
    let x = document.getElementById('lorem_2');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};

document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_3());
document.getElementById('clik_lorem_3').addEventListener("click", hiddenCloseclick_lorem_3);


function hiddenCloseclick_lorem_3(){
    let x = document.getElementById('lorem_3');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};
document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_4());
document.getElementById('clik_lorem_4').addEventListener("click", hiddenCloseclick_lorem_4);


function hiddenCloseclick_lorem_4(){
    let x = document.getElementById('lorem_4');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};

document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_5());
document.getElementById('clik_lorem_5').addEventListener("click", hiddenCloseclick_lorem_5);


function hiddenCloseclick_lorem_5(){
    let x = document.getElementById('lorem_5');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};

document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem_6());
document.getElementById('clik_lorem_6').addEventListener("click", hiddenCloseclick_lorem_6);


function hiddenCloseclick_lorem_6(){
    let x = document.getElementById('lorem_6');
    if (x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"}

};