let burger = document.querySelector(".burger");

burger.addEventListener("click",()=>{
    document.querySelector(".burger-main").classList.toggle("active");
    document.querySelectorAll(".burger-item").forEach((item)=>{
        item.classList.toggle("active");
    })
    document.querySelector(".burger").classList.toggle("active");
});