
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyCSkpX51ZsFWXFE06F869UfnjxZkAAfY4A",

    authDomain: "moodfit-77c7a.firebaseapp.com",

    databaseURL: "https://moodfit-77c7a-default-rtdb.firebaseio.com",

    projectId: "moodfit-77c7a",

    storageBucket: "moodfit-77c7a.firebasestorage.app",

    messagingSenderId: "278596532420",

    appId: "1:278596532420:web:84945a59e0a84cbc95b191",

    measurementId: "G-G10E9L2JNH"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document
.getElementById("loginForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        Swal.fire({

            icon: "success",

            title: "Login Berhasil!",

            text: "Selamat datang di MoodFit",

            confirmButtonColor: "#d9a8a1"

        }).then(() => {

            window.location.href =
            "index.html";

        });

    }

    catch(error){

        Swal.fire({

            icon: "error",

            title: "Login Gagal",

            text: "Email atau password salah",

            confirmButtonColor: "#d9534f"

        });

    }

});
