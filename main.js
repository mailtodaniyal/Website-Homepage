// nav
function Check() {
    var menu = document.querySelector("ul");
    menu.classList.toggle("show")
}
// nav end
// pre loader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".circle1").style.display = "none";
        document.getElementById("website").style.display = "block";
        document.getElementById("website").style.transition = "2s"
    }, 2000)
})
// pre loader end