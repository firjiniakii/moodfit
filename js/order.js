
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
    appId: "1:278596532420:web:84945a59e0a84cbc95b191"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const modal =
document.getElementById("orderModal");

document
.querySelectorAll(".order-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        modal.classList.add("active");

        document.getElementById("selectedBox").value =
        button.dataset.box;

        document.getElementById("selectedPrice").value =
        "Rp " + button.dataset.price;

    });

});

document
.querySelector(".close-modal")
.addEventListener("click", () => {

    modal.classList.remove("active");

});

document
.getElementById("orderForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    const orderData = {

        name:
        document.getElementById("customerName").value,

        email:
        document.getElementById("customerEmail").value,

        phone:
        document.getElementById("customerPhone").value,

        address:
        document.getElementById("customerAddress").value,

        moodBox:
        document.getElementById("selectedBox").value,

        price:
        document.getElementById("selectedPrice").value,

        date:
        new Date().toISOString()

    };

    push(
        ref(db, "orders"),
        orderData
    )

    .then(() => {

        Swal.fire({

    icon: 'success',

    title: ' Pesanan Berhasil Dibuat',

    html: `
        <b>Terima kasih telah berbelanja di MoodFit.</b>
        <br><br>
        Tim kami akan segera menghubungi Anda melalui WhatsApp.
    `,

    confirmButtonColor: '#d9a8a1',

    background: '#fffaf9',

    showClass: {
        popup: 'animate__animated animate__zoomIn'
    },

    hideClass: {
        popup: 'animate__animated animate__fadeOut'
    }

});

        modal.classList.remove("active");

        document
        .getElementById("orderForm")
        .reset();

    })

    .catch((error) => {

        console.error(error);

        alert("Gagal menyimpan pesanan!");

    });

});
