let modal = document.querySelector(".header__modal")
let openModal = document.querySelector(".header__content--openModal")
let cross = document.querySelector(".header__modal__content--close")[0]

openModal.addEventListener('click', () => {
    modal.style.display = "block";
    modal.addEventListener('click', () => {
        modal.style.display = "none";
    })
    cross.addEventListener('click', () => {
        modal.style.display = "none";  
    })
})



