import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "tu-api-key",
    authDomain: "tu-auth-domain",
    projectId: "tu-project-id",
    storageBucket: "tu-storage-bucket",
    messagingSenderId: "tu-messaging-sender-id",
    appId: "tu-app-id",
    measurementId: "tu-measurement-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

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

function mostrarEstadoUsuario() {
    console.log("Usuario autenticado:", auth.currentUser);
    
    // Redirigir a pagina2.html después de la autenticación
    window.location.href = "pagina2.html";
   
}