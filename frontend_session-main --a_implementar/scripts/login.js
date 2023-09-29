document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

function login() {
    const data = {
        nombre_usuario: document.getElementById("nombre_usuario").value,
        contraseña: document.getElementById("contraseña").value,
    };

    fetch("http://127.0.0.1:5000/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            // Redirect to profile page if login is successful
            return response.json().then(data => {
                window.location.href = "profile.html";
                window.location.href = "pantalla_inicio.html";
            });


        // } else if (response.status === 401) {
        //     return response.json().then(data => {
        //         document.getElementById("message").innerHTML = "Contraseña incorrecta";
        //     });   


        } else {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });
}