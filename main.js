// Obtener el botón para abrir el modal
var btnAbrirModal = document.getElementById("openModal");

// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el botón para cerrar el modal
var btnCerrarModal = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
btnAbrirModal.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en el botón para cerrar el modal, cerrarlo
btnCerrarModal.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}


add.addEventListener("click", () => {
    let modelo =  <div class="listadoDetareas">
    <h1>${nombreTarea.value}</h1>
    <p>${Descripcion.value}</p>
</div>

    contenedor.innerHTML += modelo;
    nombreTarea.value = "";
    descripcion.value = "";
    });//