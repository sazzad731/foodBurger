
// for menu bar
const burgers = document.querySelector(".burgers");
const items = document.querySelector("ul");
burgers.addEventListener("click", function allActive() {
    if (items.classList.contains("active")) {
        items.classList.remove("active");
    } else {
        items.classList.add("active");
    }
})


// for burgers
const burger = document.querySelectorAll(".burger");
burger.forEach(function close(value) {
    burgers.addEventListener("click", function Close() {
        value.classList.toggle("activet");
    })
})