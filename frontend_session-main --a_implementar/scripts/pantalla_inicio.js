document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    user();
});

function user() {
    const data = {
        username: document.getElementById("nombre_usuario"=nombre_usuario).value,
        password: document.getElementById("contraseña"=contraseña).value,
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


// <--!Este código implementa la funcionalidad de inicio de sesión en un formulario en una página web. 

// Cuando se envía el formulario, se ejecuta la función login(). Dentro de esta función, se obtienen
//  los valores del campo de nombre de usuario y contraseña del formulario. 

// Luego, se envía una solicitud POST al servidor para autenticar al usuario con los datos proporcionados. 
// La URL de la solicitud es "http://127.0.0.1:5000/auth/login", que es la dirección del servidor de autenticación.

// La solicitud incluye los datos del usuario en el cuerpo de la solicitud como JSON. Además, se establece 
// el encabezado "Content-Type" como "application/json" para indicar que se está enviando JSON.

// También se establece el atributo "credentials" como "include" para enviar las cookies del navegador junto 
// con la solicitud. Esto es importante para mantener la sesión activa después del inicio de sesión.

// La respuesta del servidor se maneja en una función de devolución de llamada. Si la respuesta tiene un estado 
// 200, lo que significa que el inicio de sesión fue exitoso, se redirige al usuario a la página de perfil.

// Si la respuesta tiene un estado diferente a 200, se muestra un mensaje de error en la página.

// En resumen, este código realiza una solicitud de inicio de sesión al servidor, maneja la respuesta y muestra 
// mensajes de error o redirecciona al usuario según el resultado./-->