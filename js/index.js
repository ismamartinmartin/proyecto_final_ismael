//ESTRUCTURA DEL CÓDIGO JAVASCRIPT
/*
-Variables menú responsive
-Variables carrousel home
-Variables transición opacidad
-Menú responsive
-Carrousel home
-Cards stories search engine
-Transición opacidad
*/

//MENU VARIABLES
/*Selecciona el elemento que engloba el pop-up*/
let modal = document.querySelector(".header__modal")
/*Selecciona el icono del menú tipo hamburguesa, que al hacerle clic, abre el pop-up*/ 
let openModal = document.querySelector(".header__content--openModal")
/*Selecciona el elemento de cierre del pop-up*/ 
let cross = document.querySelector(".header__modal__content--close")

//CARROUSEL HOME VARIABLES
/*Selecciona cada slider del carrousel*/ 
let slider = document.querySelectorAll(".carrousel__slider__container__each")
/*Selecciona el contenedor principal que envuelve a todos*/
let section = document.querySelector(".carrousel__slider__container")
/*Indica el índice actual del carrusel*/ 
let contador = 0

//OPACITY TRANSITION VARIABLES
/*Esta variable llama a todos aquellos elementos a los cuales se les va a aplicar la transición*/ 
let showElement = document.querySelectorAll('.scroll__transition')

//MENU
/*Descripción: este código de JS controla la apertura y cierre de un menú (tipo pop-up) en la cabecera de una página web*/ 
openModal.addEventListener('click', () => {
    /*Cuando se haga clic en el icono del menú tipo hamburguesa, abre el pop-up*/ 
    modal.style.display = "block"
    /*Si se hace clic en cualquier parte del modal, se cerrará*/
    modal.addEventListener('click', () => {
        modal.style.display = "none"
    })
    /*Si se hace clic en el elemento de cierre también el pop-up se cierra*/ 
    cross.addEventListener('click', () => {
        modal.style.display = "none" 
    })
})

//CARROUSEL HOME
/*Descripción: esta función desplaza el carrusel de la página de bienvenido en un intervalo de 5 segundos, moviendo el ancho de la sección que lo envuelve mediante un contador*/ 
function updateSlideWidth() {
    /*Selecciona una slide del carrusel*/ 
    let slideElement = document.querySelector('.carrousel__slider__container__each')
    /*Comprueba si ese elemeto existe (así no sale error en consola cuando estás en otra página donde no esté el carrusel, porque intenta ejercutar la función y no le encuentra) y mueve el ancho de la sección de acuerdo al elemento y al índice actual*/
    if (slideElement) {
        let slideWidth = slideElement.offsetWidth
        section.style.transform = `translateX(${-contador * slideWidth}px)`
    }
}

/*Llama a la función cuando la ventana se redimensiona para ajustar el tamaño del carrusel*/ 
window.addEventListener('resize', updateSlideWidth)

/*Permite cambiar el índice cada 5 segundos, verificando si el contador/índice es menor al número de elementos del carrusel, si es así aumenta un punto al índice, de lo contrario lo reinicia a 0*/ 
setInterval(() => {
    if (contador < slider.length - 1) {
        contador++;
    } else {
        contador = 0;
    }
    updateSlideWidth()
}, 3500)


//CARDS SEARCH ENGINE
/*Descripción: esta función hace una búsqueda en tiempo real que filtra las cards de libros de las páginas Stories with L, G, T & B, +Literature & Diversity y Chindren's literature basándose en el título de los libros de cada página*/ 
function search() {
    /*Hace referencia a aquello (el input) que escribe el usuario*/ 
    let inputSearch = document.getElementById("inputSearch")
    /*Es la sección que contiene todas las cards*/ 
    let sectionSearch = document.getElementById("sectionSearch")
    /*Hace referencia a cada card individual*/ 
    let containerSearch = sectionSearch.querySelectorAll(".cards__container__box")
    /*Convierte el texto insertado a mayúsculas, para evitar problemas de sensibilidad mayúsculas/minúsculas*/ 
    let filter = inputSearch.value.toUpperCase()
    /*Analiza si se han encontrado coincidencias o no comparando los títulos con el input escrito*/ 
    let matchFound = false;
    //Nota: la variables están dentro de la función, porque de lo contrario se produce un error en consola, porque la función las llama y no las encuentra en aquellas páginas que no tienen la sección cards (por ejemplo: la home)

    containerSearch.forEach(box => {
        /*Para cada card se obtiene su títuto*/ 
        let titleSearch = box.getElementsByClassName("cards__container__box__content--information--title")[0]
        
        /*Si el título del libro existe*/ 
        if (titleSearch) {
            /*Se divide el input de búsqueda en palabras individuales*/ 
            let searchWords = filter.split(' ')
            /*Se inicia un nuevo contador, que cuenta las palabras del input de búsqueda que se encuentras en el título del libro*/ 
            let findWords = 0

            /*Para cada "palabra" del input de búsqueda se verifica que está presente el título del libro */
            searchWords.forEach(word => {
                /*Si es así el contador aumenta*/
                if (titleSearch.innerHTML.toUpperCase().includes(word)) {
                    findWords++
                }
            });
            
            /*Si todas las palabras del input de búsqueda están presentes en el título del libro se muestra la card, de lo contrario se oculta*/ 
            if (findWords === searchWords.length) {
                box.style.display = ""
            /*Si al menos una card coincide, se actualiza el matchFound a true*/
                matchFound = true
            } else {
                box.style.display = "none"
            }
        }
    });

    /*Si no se encuentra ninguna coincidencia en el título de ninguna card, se muestra el mensaje "No results found"*/ 
    let noResultDiv = document.querySelector(".cards__noResult")
    noResultDiv.style.display = matchFound ? "none" : "flex"
}

//OPACITY TRANSITION
/*Al utilizar un addEventListener "scroll" hacemos que la función se ejecute cada vez que el usuario desplace la página*/
window.addEventListener('scroll', () => {
    /*Se llama a cada elemento de forma individual*/
    showElement.forEach((showEach) => {
        /*Se verifica la posición del elemento desde la ventana, por lo que si su distancia es menor que la altura de la ventana menos 150 píxeles este tendrá visibilidad y su opacidad será 1. De lo contrario, se borrará el atributo style del elemento*/
        if (showEach.getBoundingClientRect().top < window.innerHeight - 150) {
            showEach.style.opacity = '1'
        } else {
            showEach.removeAttribute('style')
        }
    })
})
