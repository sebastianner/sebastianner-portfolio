var sap = document.getElementById('sap')
var logo = document.getElementById('logo')

window.addEventListener('load', load)
function load(){
    let op = sap.clientHeight / 2
    logo.style.marginTop = -op + 'px'
}

window.addEventListener('resize',res)
function res() {
    let op = sap.clientHeight / 2
    window.removeEventListener('load', load)
    logo.style.marginTop = -op + 'px'
}