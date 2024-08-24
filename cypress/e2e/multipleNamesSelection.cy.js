describe('Multiple Names Selection', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('should correctly draw multiple names when multiple names are requested', () => {
        cy.get('textarea#namesInput').type('Alice, Bob, Charlie, David');
        cy.get('input#quantityInput').type('2');
        cy.get('button#drawButton').click();
        cy.get('#result').should('exist');
        cy.get('#result').invoke('text')
            .should('match', /Nomes sorteados: (Alice|Bob|Charlie|David), (Alice|Bob|Charlie|David)/);
    });
});
