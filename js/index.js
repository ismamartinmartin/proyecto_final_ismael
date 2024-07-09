//MENU VARIABLES
let modal = document.querySelector(".header__modal")
let openModal = document.querySelector(".header__content--openModal")
let cross = document.querySelector(".header__modal__content--close")
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

//SEARCH ENGINE
function search() {
    let inputSearch = document.getElementById("inputSearch")
    let sectionSearch = document.getElementById("sectionSearch")
    let containerSearch = sectionSearch.querySelectorAll(".cards__container__box")
    let filter = inputSearch.value.toUpperCase()
    let matchFound = false

    for (let i = 0; i < containerSearch.length; i++) {
        let titleSearch = containerSearch[i].getElementsByClassName("cards__container__box__content--information--title")[0]
        
        if (titleSearch) {
            let searchWords = filter.split(' ')
            let findWords = 0;

            for (let filtering of searchWords) {
                if (titleSearch.innerHTML.toUpperCase().indexOf(filtering) > -1) {
                    findWords++
                }
            }

            if (findWords === searchWords.length) {
                containerSearch[i].style.display = ""
                matchFound = true; 
            } else {
                containerSearch[i].style.display = "none"
            }
        }
    }

    let noResultDiv = document.querySelector(".cards__noResult");
    
    if (matchFound) {
        noResultDiv.style.display = "none";
    } else {
        noResultDiv.style.display = "flex";
    }
}