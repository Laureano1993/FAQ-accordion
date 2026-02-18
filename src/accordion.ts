const containers = document.querySelectorAll(".container") as NodeListOf<HTMLDivElement>;
const switches = document.querySelectorAll(".title") as NodeListOf<HTMLDivElement>;
const plus = document.querySelectorAll(".plus") as NodeListOf<HTMLImageElement>;
const minus = document.querySelectorAll(".minus") as NodeListOf<HTMLImageElement>;
const infos = document.querySelectorAll(".info") as NodeListOf<HTMLDivElement>;

switches.forEach((btn,index) => {
    btn.addEventListener("click",()=> {
        infos[index].classList.toggle("show");
        plus[index].classList.toggle("show");
        minus[index].classList.toggle("show");
        containers[index].classList.toggle("show")
    })
})