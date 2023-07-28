let menuBtn = document.getElementById("menu-btn")
let sideNav = document.getElementById("my-side-nav")
let closeBtn = document.getElementById("close-btn")
let foodBtn = document.getElementById("food-btn")
let aboutBtn = document.getElementById("about-btn")

menuBtn.onclick = function () {
  sideNav.style.display = "block"
}

closeBtn.onclick = function () {
  sideNav.style.display = "none"
}

foodBtn.onclick = function () {
  sideNav.style.display = "none"
}

aboutBtn.onclick = function () {
  sideNav.style.display = "none"
}