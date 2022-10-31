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





        

    const menu = document.querySelector("#menu");
    const nav = document.querySelector("#nav");
    const body = document.body;
    menu.addEventListener("click", hanbHandler);


   function hanbHandler(event) {
   event.preventDefault();
   nav.classList.toggle("open"); 
   body.classList.toggle("noscroll");
   console.log("open") 

}
