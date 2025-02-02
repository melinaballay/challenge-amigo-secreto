// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigosDisponibles = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (nombre && !amigos.includes(nombre)) {
    amigos.push(nombre);
    amigosDisponibles.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
  } else {
    alert("Por favor, ingrese un nombre válido y que no esté repetido.");
  }
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigosDisponibles.length === 0) {
    alert(
      "Todos los amigos ya fueron sorteados. Reinicie para comenzar de nuevo."
    );
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
  const ganador = amigosDisponibles.splice(indiceAleatorio, 1)[0];
  document.getElementById(
    "resultado"
  ).textContent = `El amigo secreto es: ${ganador}`;
}

function reiniciarSorteo() {
    amigos = [];
    amigosDisponibles = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';
}