// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigo a la lista
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    //alert(nombre);
    if (nombre==''){
        alert('Por favor, inserte un nombre.');
    }
    else{
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        alert('Amigo agregado');
        actualizarListaAmigos();
    }
}

// Función para agregar el amigo a la lista HTML
function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
        //alert('agregando amigo');
    }
}

// Función para sortear amigo
function sortearAmigo(){
    if (amigos.length>0){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        document.getElementById('resultado').innerHTML = amigos[indiceAleatorio];
    }
}

