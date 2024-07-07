//MENU VARIABLES
let modal = document.querySelector(".header__modal")
let openModal = document.querySelector(".header__content--openModal")
let cross = document.querySelector(".header__modal__content--close")[0]
//SLIDER HOME WIDTH > 1000px VARIABLES
let slider = document.querySelectorAll(".carrousel__slider__container__each")
let section = document.querySelector(".carrousel__slider__container")
let contador = 0

//MENU
openModal.addEventListener('click', () => {
    modal.style.display = "block";
    modal.addEventListener('click', () => {
        modal.style.display = "none";
    })
    cross.addEventListener('click', () => {
        modal.style.display = "none";  
    })
})

//SLIDER HOME WIDTH > 1000px
setInterval(() =>{
    if (contador < slider.length - 1){
        contador++
        let calcule = (contador * (-1000))
        section.style.transform = (`translateX(${calcule}px)`)
    }
    else if (contador == slider.length - 1){
        contador = 0
        let calcule = (contador * (-1000))
        section.style.transform = (`translateX(${calcule}px)`)  
    }
},5000)



