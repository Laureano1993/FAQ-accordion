const containers = document.querySelectorAll(".container");
const switches = document.querySelectorAll(".title");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const infos = document.querySelectorAll(".info");
switches.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        infos[index].classList.toggle("show");
        plus[index].classList.toggle("show");
        minus[index].classList.toggle("show");
        containers[index].classList.toggle("show");
    });
});
