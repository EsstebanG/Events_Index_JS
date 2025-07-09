document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (email === "antony@riwi.io" && password === "1234567890") {
    window.location.href = "bienvenido.html";
  } else {
    errorMessage.textContent = "Usuario o contraseña incorrectos";
  }
});
