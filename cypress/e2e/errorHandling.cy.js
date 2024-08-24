describe('Error Handling', () => {
    beforeEach(() => {
        cy.visit('index.html'); // Change the URL as needed
    });

    it('should show an alert when trying to draw without names', () => {
        cy.get('input#quantityInput').type('1');
        cy.get('button#drawButton').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Por favor, insira ao menos um nome.');
        });
    });

    it('should show an alert when quantity is invalid', () => {
        cy.get('textarea#namesInput').type('Alice, Bob, Charlie');
        cy.get('button#drawButton').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Por favor, insira uma quantidade válida.');
        });
    });

    it('should show an alert when trying to draw more names than available', () => {
        cy.get('textarea#namesInput').type('Alice, Bob, Charlie');
        cy.get('input#quantityInput').type('5');
        cy.get('button#drawButton').click();
        cy.on('window:alert', (txt) => {
            expect(txt)
                .to.contains('A quantidade de nomes a sortear não pode ser maior que o número de nomes inseridos.');
        });
    });
});
