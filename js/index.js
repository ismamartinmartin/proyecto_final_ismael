//MENU VARIABLES
let modal = document.querySelector(".header__modal")
let openModal = document.querySelector(".header__content--openModal")
let cross = document.querySelector(".header__modal__content--close")
//SLIDER HOME VARIABLES
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

//SLIDER HOME
function updateSlideWidth() {
    let slideElement = document.querySelector('.carrousel__slider__container__each');
    if (slideElement) {
        let slideWidth = slideElement.offsetWidth;
        section.style.transform = `translateX(${-contador * slideWidth}px)`;
    }
}

window.addEventListener('resize', updateSlideWidth);

setInterval(() => {
    if (contador < slider.length - 1) {
        contador++;
    } else {
        contador = 0;
    }
    updateSlideWidth();
}, 5000);


//SEARCH ENGINE
const search = () => {
    let inputSearch = document.getElementById("inputSearch");
    let sectionSearch = document.getElementById("sectionSearch");
    let containerSearch = sectionSearch.querySelectorAll(".cards__container__box");
    let filter = inputSearch.value.toUpperCase();
    let matchFound = false;

    containerSearch.forEach(box => {
        let titleSearch = box.getElementsByClassName("cards__container__box__content--information--title")[0];
        
        if (titleSearch) {
            let searchWords = filter.split(' ');
            let findWords = 0;

            searchWords.forEach(word => {
                if (titleSearch.innerHTML.toUpperCase().includes(word)) {
                    findWords++;
                }
            });

            if (findWords === searchWords.length) {
                box.style.display = "";
                matchFound = true;
            } else {
                box.style.display = "none";
            }
        }
    });

    let noResultDiv = document.querySelector(".cards__noResult");
    
    noResultDiv.style.display = matchFound ? "none" : "flex";
};

