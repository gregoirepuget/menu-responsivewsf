// step 1 : définir les variables dont on a besoin
const burgerButton = document.querySelector('.hamburger')
const mainNav = document.querySelector('header nav')
const overlay = document.querySelector('.overlay')
const closeMenuButton = document.querySelector('.closeMenuButton')

// step 2 : définier l'évenement au clic  sur le burger menu
burgerButton.addEventListener('click', function() {
    // step 3 : définir les actions à éxécuter au clic
    console.log('OK')
    burgerButton.classList.add('is-active')
    mainNav.classList.add('isVisible')
    overlay.classList.add('isVisible')

})

closeMenuButton.addEventListener('click', function () {
    burgerButton.classList.remove('is-active')
    mainNav.classList.remove('isVisible')
    overlay.classList.remove('isVisible')
})

overlay.addEventListener('click', function () {
    burgerButton.classList.remove('is-active')
    mainNav.classList.remove('isVisible')
    overlay.classList.remove('isVisible')
})




