
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSkpX51ZsFWXFE06F869UfnjxZkAAfY4A",
    authDomain: "moodfit-77c7a.firebaseapp.com",
    projectId: "moodfit-77c7a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document
.getElementById("registerForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

Swal.fire({
icon:'success',
title:'Akun berhasil dibuat!'
});

}catch(error){

Swal.fire({
icon:'error',
title:error.message
});

}

});
