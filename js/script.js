const navBtn = document.getElementById("navBtn")
const primaryNav = document.getElementById("primaryNav")

function toggleNav() {
  primaryNav.classList.toggle("showNav")
  if (primaryNav.classList.contains("showNav")) {
    navBtn.innerHTML = `<img src="./images/icon-close.svg" alt="" />`
    navBtn.ariaLabel = "Close nevigation"
    navBtn.ariaExpanded = "true"
  } else {
    navBtn.innerHTML = `<img src="./images/icon-hamburger.svg" alt="" />`
    navBtn.ariaLabel = "Open navigation"
    navBtn.ariaExpanded = "false"
  }
}

navBtn.addEventListener("click", toggleNav)