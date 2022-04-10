describe('primer test', () => {
	it('frontpage', () => {
		cy.visit('http://localhost:3000');
		cy.contains('Covid-19 Analytic');
	});

	it('Hacer una busqueda', () => {
		const form = cy.get('#form-search-country');

		const input = form.get('input');
		input.type('Francia');

		const submitBtn = form.get('button');
		submitBtn.click();

		// Resultado de la busqueda
		const country = cy.get('[data-test-id="country-item"]');
		country.get('h3').first().contains('Pais');
	});

	it('Busqueda Fallida', () => {
		const form = cy.get('#form-search-country');

		const input = form.get('input');
		input.clear();
		input.type('Lo que sea');

		const submitBtn = form.get('button');
		submitBtn.click();

		// Resultado de la busqueda
		const errorMsg = cy.get('[data-test-id="error-message"');
		errorMsg.get('p').first().contains('El pais que buscas no es posible ubicarlo');
	});
});
