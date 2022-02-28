const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); 


const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerDatos);
telefono.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validación de formulario

    const { nombre, telefono, email, mensaje } = datos;
    let regName = /^[a-zA-Z\-]+$/;

    if(usuario ==='' || password ===''){
        errorMensaje('Todos los campos son obligatorios');
        return false;
    }
    if (!(usuario.length > 8 && regName.test(usuario))){
        errorMensaje('Usuario no cumple con requisitos minimos.');
        return false;
    }
    if(!(regPassw.test(password))){
        errorMensaje('Contraseña no cumple requisitos minimos.');
        return false;
    }

    setCookie('usuario', usuario, 30);
    sessionStorage.usuario = usuario;
    localStorage.password = password;

    console.log(getCookie('usuario'));

    return true;    
});

function leerDatos(e) {
    datos[e.target.id] = e.target.value;
}

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