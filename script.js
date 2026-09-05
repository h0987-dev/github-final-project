const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	status.textContent = 'Thanks. We will be in touch soon.';
	form.reset();
});
