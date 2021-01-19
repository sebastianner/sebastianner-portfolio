var burger_menu_icon = document.getElementById('burger-menu-icon')
var icon_x = document.querySelector('.icon-x')
var burger = document.querySelector('.burger-menu')
var burger_menu_links = document.querySelectorAll('.burger-menu-link')

function validate(ev) {
    if (ev.matches) {
burger_menu_icon.addEventListener('click', isActive)
function isActive(){burger.classList.add('is-active')}

icon_x.addEventListener('click', isOff)
function isOff(){burger.classList.remove('is-active')}

burger_menu_links.forEach(e => {
    if (ev.matches) {
        e.addEventListener('click', offLinks)
        function offLinks(){burger.classList.remove('is-active')}
    }else{
        e.removeEventListener('click', offLinks)
    }
})
    }else{
        burger_menu_icon.removeEventListener('click', isActive)
        icon_x.removeEventListener('click', isOff)
    }
}

const mobile = window.matchMedia('(max-width:447px)')
validate(mobile)
mobile.addListener(validate)