
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyCSkpX51ZsFWXFE06F869UfnjxZkAAfY4A",

    authDomain: "moodfit-77c7a.firebaseapp.com",

    databaseURL: "https://moodfit-77c7a-default-rtdb.firebaseio.com",

    projectId: "moodfit-77c7a",

    storageBucket: "moodfit-77c7a.firebasestorage.app",

    messagingSenderId: "278596532420",

    appId: "1:278596532420:web:84945a59e0a84cbc95b191"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const authButtons =
document.getElementById("authButtons");

onAuthStateChanged(auth,(user)=>{

    if(user){

        authButtons.innerHTML = `

        <a href="akun.html"
        class="login-btn">

        👤 Akun Saya

        </a>

        <a href="#"
        id="logoutBtn"
        class="register-btn">

        Logout

        </a>

        `;

        document
        .getElementById("logoutBtn")
        .addEventListener("click",()=>{

            signOut(auth)

            .then(()=>{

                Swal.fire({

                    icon:"success",

                    title:"Logout Berhasil",

                    confirmButtonColor:"#d9a8a1"

                })

                .then(()=>{

                    location.reload();

                });

            });

        });

    }

});
