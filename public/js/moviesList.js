const qs = (element) => {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    let body = qs("body")
    let h1 = qs("h1")
    let darkMode = prompt("¿Desea modo oscuro?")

    if(darkMode === "Si" || "si") {
        body.style.backgroundColor = "#7f7f7f"
        body.classList.add("fondoMoviesList")
    }

    h1.innerHTML += "LISTADO DE PELÍCULAS";
    h1.style.color = "white";
    h1.style.backgroundColor = "teal";
    h1.style.padding = "20px"

})