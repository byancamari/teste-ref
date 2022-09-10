const menu = document.querySelector('.menu');
const NavMenu = document.getElementById('nav-menu');

document.addEventListener('scroll', () => {
    if ((0 <= document.documentElement.scrollTop) && (document.documentElement.scrollTop < 300)) {
        NavMenu.querySelectorAll('a')[0].style.color = 'var(--active)'
        NavMenu.querySelectorAll('a')[1].style.color = ''
        NavMenu.querySelectorAll('a')[2].style.color = ''
    }
    else if (300 <= document.documentElement.scrollTop) {
        NavMenu.querySelectorAll('a')[0].style.color = ''
        NavMenu.querySelectorAll('a')[1].style.color = 'var(--active)'
        NavMenu.querySelectorAll('a')[2].style.color = ''
    }
})

const homeButton = document.getElementById('home-button')
const competiçõesButton = document.getElementById('competiçoes-button')
const integrantesButton = document.getElementById('integrantes-button')
homeButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

competiçõesButton.addEventListener('click', () => {
    window.scroll({
        top: 300,
        behavior: 'smooth'
    })
})

integrantesButton.addEventListener('click', () => {
    window.scroll({
        top: 300,
        behavior: 'smooth'
    })
})