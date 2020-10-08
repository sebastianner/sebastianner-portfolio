var cards = document.querySelectorAll('.card')
var apps = document.getElementById('apps')

function switchAttribute(x) {
    if (x.matches) {
        cards.forEach(e => {
            e.setAttribute('data-aos','fade-down')
        })
        apps.setAttribute('data-aos','fade-down')
    }else{
        cards.forEach(e=>{
            e.setAttribute('data-aos','fade-right')
        })
        apps.setAttribute('data-aos','fade-right')
    }
}

var x = window.matchMedia('(max-width:1328px)')
switchAttribute(x)
x.addListener(switchAttribute)