const qs = (element) => {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    let h1 = qs('h1')
    let section = qs('section')
    let article = qs('article')

    h1.innerHTML += "AGREGAR PELÍCULAS";
    h1.classList.add("titulo");
    article.classList.add("fondoTransparente");
    section.classList.add("fondoCRUD")

})