let persona = []

function capturarDatos(){
    console.log("Capturando Datos...")
    let persona = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        ciudad: document.getElementById("ciudad").value,
    }
    persona.push(persona)
    mostrarCards()
}
function mostrarCards(){
    document.getElementById("cards").innerHTML = ""
    persona.map(function (persona){
        let card = document.createElement("section");
        let nombre = document.createElement("p")
        let correo = document.createElement("p")
        let telefono = document.createElement("p")
        let fecha = document.createElement("p")
        let ciudad = document.createElement("p")
        nombre.textContent = persona.nombre
        correo.textContent = persona.correo
        telefono.textContent = persona.telefono
        fecha.textContent = persona.fecha
        ciudad.textContent = persona.ciudad
        card.append(nombre, correo, telefono, fecha, ciudad)
        document.getElementById("cards").append(card)
    })
}