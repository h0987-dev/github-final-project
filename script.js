const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const clearSearch = document.getElementById('clear-search');
const destinationCards = document.querySelectorAll('.destination-card');

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const query = searchInput.value.trim().toLowerCase();
	destinationCards.forEach((card) => {
		const matchesCategory = query === 'country' && card.dataset.category === 'country';
		card.hidden = query !== '' && !matchesCategory && !card.textContent.toLowerCase().includes(query);
	});
	document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
});

clearSearch.addEventListener('click', () => {
	searchInput.value = '';
	destinationCards.forEach((card) => { card.hidden = false; });
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	status.textContent = 'Thanks. We will be in touch soon.';
	form.reset();
});
