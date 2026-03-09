function togglePassword() {
    const passwordField = document.getElementById('password');
	const btn = document.getElementById('togglePw');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
		btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordField.type = 'password';
		btn.innerHTML = '<i class="bi bi-eye"></i>';
    }
}