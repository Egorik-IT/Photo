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
    document.querySelector(".scroll__spisok").style.display = "flex"
    document.querySelector(".osnova").style.overflow = "hidden";
}   

function closew(){
    document.querySelector(".scroll__spisok").style.display = "none"
    document.querySelector(".osnova").style.overflow = "scroll";
}
