
const saludar = () => {
    alert('Ya casi nos vamos a almorzar');
}

const cambiaFondo = color => {
    document.body.style.backgroundColor=color;
}

function changeToGreenColor () {
    let element = document.getElementById('green-paragrph');
    console.log(element);
    element.style.color = "green";
}

function changeColor (element, color) {
    element.style.color = color;
}



function cambiaNombre(){
    let nombreUsuario = prompt("Ingresa el nuevo nombre");
    document.getElementById('saludoNombre').textContent= `Hola ${nombreUsuario}`;
}