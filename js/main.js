const headerNavBarItem = document.querySelector('.hidden-product')
const headerSubnavList = document.querySelector('.header-subnav__list')
const hiddenNav = document.querySelector('.header-bar .hiddennav .ti-view-grid')
const headerNavBar = document.querySelector('.header-navbar')
headerNavBarItem.addEventListener('click', showSubMenu)
hiddenNav.addEventListener('click', showMenu)

function showSubMenu() {
    headerSubnavList.classList.toggle('open')
}

function showMenu() {
    headerNavBar.classList.toggle('open')
}
