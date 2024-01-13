const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', () => {
	container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
	container.classList.remove('panel-active');
})
function isConnected() {
	// Vérifiez si les utilisateurs sont connectés
	// ...
  
	if (isConnected) {
	  // Redirigez les utilisateurs vers la page de connexion
	  window.location.href = "login.html";
	}
  }
  