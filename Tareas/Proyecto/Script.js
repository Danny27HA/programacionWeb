import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


// Configuración de Firebase (reemplaza con tu propia configuración)
const firebaseConfig = {
    apiKey: "AIzaSyAxMhNJQpZjSAHnUW8UmH0zJ_syH4j8nS8",
    authDomain: "proyectoico-4fabf.firebaseapp.com",
    projectId: "proyectoico-4fabf",
    storageBucket: "proyectoico-4fabf.appspot.com",
    messagingSenderId: "1091072356508",
    appId: "1:1091072356508:web:5d4547cd75a76ab3a07d59",
    measurementId: "G-ND07ZRPCPL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Configurar el proveedor de autenticación de Google
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Funciones para manejar autenticación
async function iniciarSesion() {
    try {
        await signInWithPopup(auth, provider);
        mostrarEstadoUsuario();
        console.log("Inicio de sesión exitoso");
    } catch (error) {
        console.error("Error en el inicio de sesión", error);
    }
}

async function register() {
    const email = "usuario@example.com";
    const password = "contraseña123";

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        mostrarEstadoUsuario();
        console.log("Registro exitoso");
    } catch (error) {
        console.error("Error en el registro", error);
    }
}

// Función para mostrar el estado del usuario
function mostrarEstadoUsuario() {
    const userStatus = document.getElementById('user-status');
    const user = auth.currentUser;

    if (user) {
        userStatus.innerHTML = `Usuario autenticado: ${user.email}`;
        
        // Redirigir a pagina2.html después de la autenticación
        window.location.href = "pagina2.html";
    } else {
        userStatus.innerHTML = 'Ningún usuario autenticado';
    }
}
function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}