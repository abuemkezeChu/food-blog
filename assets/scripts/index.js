const menuBtn = document.getElementById('menu-btn')
const sideNav = document.getElementById('my-side-nav')
const closeBtn = document.getElementById('close-btn')
const foodBtn = document.getElementById('food-btn')
const aboutBtn = document.getElementById('about-btn')

menuBtn.onclick = function () {
  sideNav.style.display = 'block'
}

closeBtn.onclick = function () {
  sideNav.style.display = 'none'
}

foodBtn.onclick = function () {
  sideNav.style.display = 'none'
}

aboutBtn.onclick = function () {
  sideNav.style.display = 'none'
}
