document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    user();
});

function user() {
    const data = {
        pass
        // username: document.getElementById("nombre_usuario"=nombre_usuario).value,
        // password: document.getElementById("contraseña"=contraseña).value,
    };

    fetch("http://127.0.0.1:5000/auth/login", {
        method: 'GET',
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
                window.location.href = "login.html";
            });
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

