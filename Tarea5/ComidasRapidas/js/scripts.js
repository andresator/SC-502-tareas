const boton = document.querySelector('#boton'); //query selector mas utilizado vs GetElementByID / # selector de ID
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.querySelector('.formulario'); //selector . para clase

/* addEventListener('load', inicio);

function inicio() {
    boton.addEventListener('click',function (evento) {
        //evento.preventDefault(); //Esto es util para la validación del formulario
        let regName = /webCliente/;
        valorUsuario = usuario.value;
        if (valorUsuario.length > 8 && regName.test(valorUsuario)){
            return true;
        }else{
            return false;
        }
    });
} */

const datos = {
    usuario: '',
    password: ''
}

usuario.addEventListener('input', leerDatos);
password.addEventListener('input', leerDatos);

formulario.addEventListener('submit', function (evento) {
    //evento.preventDefault();

    //Validación de formulario

    const { usuario, password } = datos;
    let regName = /^[a-zA-Z\-]+$/;
    let regPassw=  /^[A-Za-z]\w{7,14}$/;
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