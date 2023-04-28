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
