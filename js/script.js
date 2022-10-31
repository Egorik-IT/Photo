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





const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);