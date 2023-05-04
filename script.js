const btnSeguir = document.getElementById('seguir');
const btnMeGusta = document.getElementById('MeGusta');
let botonPresionado = false;

btnSeguir.addEventListener('click', function() {
    if (btnSeguir.innerHTML === "Seguir") {
        btnSeguir.innerHTML = "Dejar de seguir";
    } else {
        btnSeguir.innerHTML = "Seguir";
    }
});

function sumalike() {
    const MeGustas = document.querySelector('.cLikes');

    if (botonPresionado) {
        MeGustas.innerHTML--;
    } else {
        MeGustas.innerText++;
    }
    botonPresionado = !botonPresionado;
};

const inpComentarios = document.querySelector('.inp-comentarios');

inpComentarios.addEventListener('click', (evento) => {
    evento.preventDefault();

    const inpUsuario = document.getElementById('inpUsuario');
    const inpComentario = document.getElementById('inp-coment');
    const usuario = inpUsuario.value.trim();
    const comentario = inpComentario.value.trim();

    if (!usuario) {
        Swal.fire({
            title: 'Error!',
            text: 'Recuerda ingresar el nombre de usuario',
            icon: 'error',
            backdrop: true

        });
        return;
    }

    if (!comentario) {
        Swal.fire({
            title: 'Error!',
            text: 'Recuerda ingresar el comentario',
            icon: 'error',
            backdrop: true
        });
        return;
    }

    AgregarComentario(usuario, comentario);
});

function AgregarComentario(usuario, comentario) {
    const contenedorComentarios = document.querySelector('.comentarios');
    const nuevoComentario = document.createElement('p');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<strong class="nombre2">${usuario}:</strong> ${comentario}`;
    const botonBorrar = document.createElement('button');
    botonBorrar.classList.add('btn-borrar');
    botonBorrar.innerText = "Eliminar";
    nuevoComentario.appendChild(botonBorrar);
    contenedorComentarios.appendChild(nuevoComentario);
    limpiarFormulario();

    botonBorrar.addEventListener('click', () => {
        contenedorComentarios.removeChild(nuevoComentario);
    })
}

function limpiarFormulario() {
    const inpUsuario = document.getElementById('inpUsuario');
    const inpComentario = document.getElementById('inp-coment');
    inpUsuario.value = "";
    inpComentario.value = "";
}