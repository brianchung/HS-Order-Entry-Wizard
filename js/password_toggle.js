function togglePassword() {
    const passwordField = document.getElementById('password');
	const btn = document.getElementById('togglePw');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
		btn.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
    } else {
        passwordField.type = 'password';
		btn.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    }
}