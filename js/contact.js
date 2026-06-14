
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

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

const db = getDatabase(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        createdAt: new Date().toISOString()
    };

    push(ref(db, "messages"), data)
        .then(() => {

            Swal.fire({

    icon: 'success',

    title: 'Pesan Berhasil Dikirim!',

    html: `
        <b>Terima kasih telah menghubungi MoodFit.</b>
        <br><br>
        Tim kami akan segera membalas pesan Anda.
    `,

    confirmButtonText: 'Tutup',

    confirmButtonColor: '#d9a8a1',

    background: '#fffaf9',

    timer: 4000,

    timerProgressBar: true

});

            form.reset();

        })
        .catch((error) => {

            console.error(error);

           Swal.fire({

    icon: 'error',

    title: 'Oops!',

    text: 'Terjadi kesalahan saat mengirim pesan.',

    confirmButtonColor: '#d9534f'

});

        });

});
