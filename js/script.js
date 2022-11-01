const button = document.querySelector(".scroll");


button.onclick = function setScrollToOptions() {
    window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        }
    ) 
    console.log("Прокрутка получилась!");
}

function nunu(){
    document.querySelector(".scroll__spisok").style.top = "0";
    document.querySelector(".close").style.top = "0";
    document.querySelector(".osnova").style.overflow = "hidden";
}
function closew(){
    document.querySelector(".scroll__spisok").style.top = "-3000px";
    document.querySelector(".close").style.top = "-700px";
    document.querySelector(".osnova").style.overflow = "scroll";
}
