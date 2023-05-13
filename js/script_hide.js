document.addEventListener("DOMContentLoaded", hiddenCloseclick);






for (let i = 0; i<5;i++){

    document.getElementsByClassName('button__footer')[i].addEventListener("click", hiddenCloseclick);
    function hiddenCloseclick() {
        let x = document.getElementsByClassName('hide')[i];
        if (x.style.display == "none"){
            x.style.display = "block";
        } else {
            x.style.display = "none"}
    };
};




document.addEventListener("DOMContentLoaded", hiddenCloseclick_lorem);
for (let i = 0; i<8;i++){

    document.getElementsByClassName('plus')[i].addEventListener("click", hiddenCloseclick_lorem);

    function hiddenCloseclick_lorem(){
        let x = document.getElementsByClassName('lorem')[i];
        if (x.style.display == "block"){
            x.style.display = "none";
        } else {
            x.style.display = "block"}

    };
};


