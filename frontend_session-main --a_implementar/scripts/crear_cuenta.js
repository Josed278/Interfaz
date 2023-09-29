document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    user();
});

// function createUser() {
//     const data = {
//         nombre_usuario: document.getElementById("nombre_usuario").value,
//         contraseña: document.getElementById("contraseña").value,
//         email: document.getElementById("email").value,
        

function user() {
    const data = {
        nombre_usuario: document.getElementById("fname").value,
        contraseña: document.getElementById("lpass").value,
        email: document.getElementById("lemail").value
            };
       
       
        
        // imagen_perfil.getElementById("imagen_perfil").value,
    };

    // fetch("http://127.0.0.1:5000/auth/create"

    fetch("http://127.0.0.1:5000/auth/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 201) { 
            // Redirect to login page if user is created successfully
            window.location.href = "login.html";
        } else if (response.status === 409) {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        } else {
            throw new Error("An error occurred.");
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });


