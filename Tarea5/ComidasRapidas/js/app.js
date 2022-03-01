//Obtener los elementos por query selector

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); 

//Crea un objeto datos que contiene los campos a recibir del usuario

const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}

//Definicion de los event listener input de los elementos html
nombre.addEventListener('input', leerDatos);
telefono.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

//Al recibir el evento submit del formulario, js ejecuta la validacion de la entrada de datos con una funcion anonima

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validación de formulario

    const { nombre, telefono, email, mensaje } = datos;
    let regName = / \b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    let regPhone = /^\d{8}$/;
    let regMail = /^\S+@\S+$/;


    if(nombre ==='' || telefono ==='' || email === '' || mensaje === ''){
        errorMensaje('Todos los campos son obligatorios');
        return false;
    }

    if (!(regName.test(nombre))){
        errorMensaje('El nombre no es válido.');
        return false;
    }

    if(!(regPhone.test(telefono))){
        errorMensaje('Telefono debe ser formato 12345678.');
        return false;
    }

    if(!(regMail.test(email))){
        errorMensaje('El correo no es válido.');
        return false;
    }

    //Creacion de cookies y de almacenamiento local y session
    setCookie('nombre', nombre, 30);
    sessionStorage.nombre = nombre;
    localStorage.nombre = nombre;

    setCookie('telefono', telefono, 30);
    sessionStorage.telefono = telefono;
    localStorage.telefono = telefono;

    setCookie('email', email, 30);
    sessionStorage.email = email;
    localStorage.email = email;

    confirmacionMensaje('¡Mensaje enviado correctamente!')
    return true;    
});

function leerDatos(e) {
    datos[e.target.id] = e.target.value;
}

//Funcion generadora de mensaje de error, aplica la clase error del css

function errorMensaje(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //desaparecer después de 5 segundos

    setTimeout(function() {
        error.remove();
    }, (5000));
}

//Funcion generadora de mensaje de confirmacion, aplica la clase confirmacion del css
function confirmacionMensaje(mensaje) {
    const confirmacion = document.createElement('P');
    confirmacion.textContent = mensaje;
    confirmacion.classList.add('correcto');

    formulario.appendChild(confirmacion);

    //desaparecer después de 5 segundos

    setTimeout(function() {
        confirmacion.remove();
    }, (5000));
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}