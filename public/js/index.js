const qs = (element) => {
    return document.querySelector(element)
}

const qsAll = (element) => {
    return document.querySelectorAll(element)
}

window.addEventListener('load', () => {
    let main = qs('main')
    let h2 = qs('h2')
    let a = qs('a')
    let p = qsAll('p')
    let body = qs('body')
    let userName = prompt("Ingrese su nombre")
    let fondoOk = confirm("¿Desea colocar un fondo de pantalla?")
    console.log(p);
    console.log(p[0]);

    if(!userName) {
        h2.innerHTML += "Invitado"
        h2.style.textTransform = "uppercase"
    } else {
        h2.innerHTML += userName
        h2.style.textTransform = "uppercase"
    }
    
    if(fondoOk) {
        body.classList.add('fondo')
    }
    a.style.color = "#E51B3E"


    for(let i = 0; i < p.length; i++) {
        if([i]% 2 === 0) {
            p[i].classList.add('destacadoPar')
        } else {
            p[i].classList.add('destacadoImpar')
        }
    }

    main.style.display = 'block'

})